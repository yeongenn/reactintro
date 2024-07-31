import React, {useState} from "react";
import GugudanList from "./GugudanList";

const Gugudan2 = () => {
    // button 눌렀을 때 input 태그 값 넘길려면 state를 나눠서 관리해야한단다
    const [text, setText] = useState(1); // input 태그 값 관리
    const [dan, setDan] = useState(1); // button 클릭 시 GugudanList로 넘겨줄 props값 관리

    const textInput = (e) => {

        const danNum = parseInt(e.target.value);

        setText(danNum); // input 태그에 입력한 값 저장
    }

    const danClick = (e) => {
        e.preventDefault();

        if(!Number(text) || isNaN(Number(text))){
            alert('숫자만 입력하세요');
        } else {

        }
        setDan(text);
        /*
        button 클릭 시에 input value로 저장해놨던 text값을 dan값으로 저장
        그럼 그 dan값이 GugudanList에 props로 전달되겠지?

        */
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

export default Gugudan2;