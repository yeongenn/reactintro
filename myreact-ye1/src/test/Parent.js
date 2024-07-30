import {useState} from "react";
import Child from "./Child";


/*
https://medium.com/@ozhanli/passing-data-from-child-to-parent-components-in-react-e347ea60b1bb

In React, data is typically passed down from parent components to child components via props

However, what if I want to pass data up from child to parent?
One way to pass data from a child to a parent component is to define a callback function in the parent component and pass it down to the child component as a prop
The child component can then call this function with the data it wants to pass up to the parent
 */

// Parent Component
function Parent(){
    const [dataFromChild, setDataFromChild] = useState('');

    function handleDataFromChild(data){
        setDataFromChild(data);
    }

    return(
        <div>
            
            <Child sendDataToParent={handleDataFromChild}/>
            <h3>Data from Child : {dataFromChild}</h3>
        </div>
    );
}

export default Parent;