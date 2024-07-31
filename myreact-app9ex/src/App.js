import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Gugudan from "./exam/Gugudan";
import Gugudan2 from "./exam/Gugudan2";
import Jikwon from "./exam/Jikwon";


function App() {
  return (
    <BrowserRouter>
      <div>
        <h3>React 문제풀이 - Routing</h3>
        <br/>
        <br/>
        <nav>
          <Link to="/gugudan">구구단</Link> |
          <Link to="/gugudan2">구구단 2</Link> |
          <Link to="/jikwon">직원 정보</Link>
        </nav>
        <br/>
        <Routes>
          <Route path="/gugudan" element={<Gugudan/>}></Route>
          <Route path="/gugudan2" element={<Gugudan2/>}></Route>
          <Route path="/jikwon" element={<Jikwon/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
