import {useState} from "react";

function Child({sendDataToParent}){
    const [data, setData] = useState('');

    /*
    function handleClick(){
        sendDataToParent(data);
    }
    */

    const keyUpChange = (e) => {
        setData(e.target.value);
        sendDataToParent(data);
    }

    return(
        <div>
            <input type="text" placeholder="child to parent" defaultValue={data} onKeyUp={keyUpChange}/>
            {/* <button onClick={handleClick}>Send Data to Parent</button> */}
            
        </div>
    );

}

export default Child;