import React, {useState} from "react";
import GugudanList from "./GugudanList";

const Gugudan = () => {
    const [dan, setDan] = useState(1);

    const danInput = (e) => {

        const danNum = parseInt(e.target.value);

        if(!Number(danNum) || isNaN(Number(danNum))){
            alert('숫자만 입력하세요');
        } else {

        }

        setDan(danNum);
    }

    return (
        <div>
            <div>
                <form>
                    단 입력 : <input type="text" onChange={danInput}/>
                </form>
            </div>
            <div>
                <GugudanList dan={dan}/>
            </div>

        </div>
    );
}

export default Gugudan;