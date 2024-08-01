import React, {memo} from "react";

const GugudanList = (props) => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(!Number(props.dan) || isNaN(Number(props.dan))){
        return(
            <div>
                숫자만 입력하라니까~!
            </div>
        );
    } else {
        return(
            <div>
                <table>
                {arr.map((arr) => ( 
                    <tr>
                        {props.dan} x {arr} = {props.dan * arr}
                    </tr>
                ))}
                </table>
            </div>
        );
    }
    
}

export default memo(GugudanList);