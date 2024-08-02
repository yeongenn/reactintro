import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function MemberForm(){

    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value // e.target.name - name이거나 addr 중 하나
        })
    }

    // 추가 버튼 클릭 시 이벤트 핸들러
    const handleSave = () => {
        // AJAX 요청 - POST
        // 요청 본문에 데이터 담아서 전송
        axios.post("/members", state)
        .then(res => {
            if(res.data.isSuccess){
                alert("추가 성공~!");
                // 추가 성공 후 목록보기
                navigate("/members");
            }
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div>
            <h3>* 회원 입력*</h3>
            <input onChange={handleChange} type="text" name="name" placeholder="이름을 입력하세요"/>
            <br/>
            <input onChange={handleChange} type="text" name="addr" placeholder="주소를 입력하세요"/>
            <br/>
            <button onClick={handleSave}>추가</button>
        </div>
    );
}