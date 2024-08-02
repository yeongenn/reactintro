import axios from "axios";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function MemberUpdateForm(){
    // /members/:num/edit 에서 num 값 읽기
    /*
        회원 목록 보기 페이지에서
        useNavigate로 /members/${item.num}/edit 요청
        Route에서는 /members/:num/edit 로 맵핑
        파라미터(?)로 넘어온 num값 읽기
            -> axios 요청할때 파라미터 값으로 전달
    */
    const {num} = useParams();

    
    // 수정할 정보 state로 관리
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""
    });
    
    //
    useEffect(() => {
        // axios로 get 요청
        axios.get("/members/" + num)
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state 수정
            setState(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [num]); // useParam()으로 넘겨받은 num
    
    //
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    //
    const navigate = useNavigate();

    // 수정 버튼 클릭 시 이벤트 핸들러
    const handleSave = () => {
        // AJAX 요청 - PUT
        axios.put("/members/" + num, state)
        .then(res => {
            if(res.data.isSuccess){
                // 수정 후 목록보기
                navigate("/members");
            }
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div>
            <h2>회원 정보 수정</h2>
            <div>
                {/* pk - input hidden or input text readOnly */}
                <label>번호 : {state.num}</label>
                {/* 
                <input type="text" name="num" value={state.num} readOnly />
                 */}
            </div>
            <div>
                {/* 기본 값 - 회원 기존 정보들 */}
                <label>이름 : </label>               
                <input type="text" name="name" onChange={handleChange} value={state.name} />
            </div>
            <div>
                <label>주소 : </label>
                <input type="text" name="addr" onChange={handleChange} value={state.addr} />
            </div>
            <button onClick={handleSave}>수정하기</button>
        </div>
    );
}