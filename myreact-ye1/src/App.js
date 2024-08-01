import React, {useState} from "react";
import Parent from "./test/Parent";
import RouteMain from "./route/RouteMain";
// import Gugudan from "./exam_7th/Gugudan";
// import Greeting from "./exam_7th/Greeting";
// import Name from "./exam_7th/nameInput";
import Test4 from "./ajax/test4";

function App() {

  //const [name, setName] = useState('ye');

  return (
    <div className="App">
      <Parent/>
      <hr/>
      <RouteMain/>
      {/* 7차 평가 */}
      {/* 
      <hr/>
      <Gugudan/>
      <hr/>
      <Greeting name={name}/>
      <hr/>
      <Name/>
       */}
       <hr/>
       <Test4/>
    </div>
  );
}

export default App;
