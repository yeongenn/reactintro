import React, {useState} from "react";
import Child from './mydir/Child';

function App() {
  // App 컴포넌트(함수)가 호출될 때 함수 내 내용을 차례대로 수행(rendering)

  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  // Event Handler
  const changeFatherAge = () => {
      setFatherAge(fatherAge + 1);
  }

  // Event Handler
  const changeChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log(`아빠 나이가 변경됨 - 렌더링`);

  // CSS
  const boxStyle = {border:'2px solid', padding:'10px'};

  return (
    <div style={boxStyle}>
        <h3>아빠(신기루님)</h3>
        <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
        <button onClick={changeFatherAge}>아빠 나이 변경</button>
        <hr></hr>
        <Child irum={'신통해'} nai={childAge}></Child>
        <br></br>
        <button onClick={changeChildAge}>자식 나이 변경</button>
    </div>
  );
}

/*
아빠 나이 변경 시 자식 나이는 리렌더링 X
자식 나이 변경 시 자식이 포함된 부모 나이도 함께 렌더링 된다
*/

export default App;
