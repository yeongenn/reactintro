import React from "react";
import TestTest from "./exam/Test";
import About from "./exam/About";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우드 연습용 메인 화면</h2>
        <TestTest />
        <hr/>
        {/* 메뉴 작성 - 라우팅 연습 */}
        <nav>
          {/* Link - a tag로 전환, 요청명 개념으로 이해하기*/}
          <Link to="/">Test 화면</Link> |
          <Link to="/about">About 보기</Link>
        </nav>

        <Routes>
          {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
          {/* Link 태그 to로부터 넘어온 요청명이 path에 맵핑, 실제로 수행되는 내용은 element에 할당한 값 */}
          <Route path="/" element={<TestTest/>}></Route> 
          <Route path="/about" element={<About/>}></Route> 
        </Routes>

      
      </div>
    </Router>
  );
}

export default App;
