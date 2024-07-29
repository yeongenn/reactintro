import React, {Component} from "react";
import {useState} from 'react';
import HookTest from "./mydir/hookTest";
import HookTest2 from "./mydir/hookTest2";

// 클래스형 컴포넌트
/*
class App extends Component {
  // 멤버필드
  state = { 
    count: 0
  };

  // 메서드
  countUpdate(n){
    this.setState({count:n});
  }

  render(){
    // count 변수 선언
    let {count} = this.state;

    return (
      // root element
      <div>
        number : {count} &nbsp;
        <button onClick={()=>{
          this.countUpdate(count + 1)
        }}>증가 1</button>
        <hr/>
        <HookTest/>
        <hr/>
        <HookTest2/>

      </div>
    );
  }
}
*/

// 함수형 컴포넌트
const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (n) => { // EventHandler -> 필수 X
    setCount(n);
  };

  return (
    <div>
      number : {count} &nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};



export default App;
