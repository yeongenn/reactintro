import React, {useState} from "react";

function Name () {

    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const resultChange = (e) => {
        e.preventDefault();
        setResult(name);
    }

    return (
        <div>
            이름 입력 : <input type="text" onChange={nameChange}/>
            <button onClick={resultChange}>확인</button>
            <br/>
            결과는 {result} 입니다!

        </div>
    );
}

export default Name;