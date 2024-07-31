import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import TestTest from "./exam/Test";
import About from "./exam/About";
import Counter from "./exam/Count";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import MultiData from "./exam/MultiData";
import MyAjax from "./exam/MyAjax";


function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <TestTest />
        <hr/>
        {/* 메뉴 작성 - 라우팅 연습 */}
        <nav>
          {/* Link - a tag로 전환, 요청명 개념으로 이해하기*/}
          <Link to="/">Test 화면</Link> |
          <Link to="/about">About 보기</Link> |
          <Link to="/count">친구 추가삭제</Link> |
          <Link to="/input1">자료 입력1</Link> |
          <Link to="/input2">자료 입력2</Link> |
          <Link to="/multi">배열 자료</Link> |
          <Link to="/ajax">AJAX 요청(과일)</Link> |
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
          {/* Link 태그 to로부터 넘어온 요청명이 path에 맵핑, 실제로 수행되는 내용은 element에 할당한 값 */}
          <Route path="/" element={<TestTest/>}></Route> 
          <Route path="/about" element={<About/>}></Route>
          <Route path="/count" element={<Counter/>}></Route>
          <Route path="/input1" element={<Input1/>}></Route>
          <Route path="/input2" element={<Input2/>}></Route>
          <Route path="/multi" element={<MultiData/>}></Route>
          <Route path="/ajax" element={<MyAjax/>}></Route>
        </Routes>

      
      </div>
    </Router>
  );
}

export default App;
