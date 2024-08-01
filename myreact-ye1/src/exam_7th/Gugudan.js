import React, {useState} from "react";
import GugudanList from "./GugudanList";

const Gugudan = () => {
    const [text, setText] = useState(1);
    const [dan, setDan] = useState(1);

    const textInput = (e) => {

        const danNum = parseInt(e.target.value);

        setText(danNum);
    }

    const danClick = (e) => {
        e.preventDefault();

        if(!Number(text) || isNaN(Number(text))){
            alert('숫자만 입력하세요');
        } else {

        }
        setDan(text);
    }

    return (
        <div>
            <div>
                <form>
                    단 입력 : <input type="text" onChange={textInput}/>
                    <button onClick={danClick}>확 인</button>
                </form>
            </div>
            <div>
                <GugudanList dan={dan}/>
            </div>

        </div>
    );
}

export default Gugudan;