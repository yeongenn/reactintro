import {useState} from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'파전'
    })

    // event handler
    const dataChange = (e) => {
        const name = e.target.name; // form 태그 내 name(속성)과
        const value = e.target.value; // 그 값
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const dataSubmit = (e) => {
        e.preventDefault();  // submit 기능 해제 (다녀올 서버 없음)
        const {nai} = formData; // formData 객체에서 nai 추출해 nai 변수에 할당

        // 입력자료 검사 - 나이
        if(!Number(nai) || isNaN(Number(nai))){
            alert(`나이는 숫자로 입력하세요`);
        } else {
            alert(`처리 성공`);
        }
        
    }
 
    return(
        <div>
            <h3>결과 : {formData.irum}, 넌 {formData.nai}살! 선택한 음식은 {formData.menu}</h3>
            <form onSubmit={dataSubmit}>
                이 름 : <input type="text" name="irum" onChange={dataChange}/><br/>
                나 이 : <input type="text" name="nai" onChange={dataChange}/><br/>
                메 뉴 : 
                <select name="menu" value={formData.menu} onChange={dataChange}>
                    <option value="치킨">치킨</option>
                    <option value="파전">파전</option>
                    <option value="삼겹살">삼겹살</option>
                </select>
                <br/><br/>
                <button type="submit">전송</button>

            </form>
        </div>
    );
}

export default MyForm;