import './css/custom.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberForm from './pages/MemberForm';
import MemberUpdateForm from './pages/MemberUpdateForm';

function App() {
  return (
    <div className="container">
      {/* Link가 다른 파일에 위치해도 요청경로만 맞게 맵핑해주면 된다 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/members" element={<Member/>}/> {/* 목록보기 */}
        <Route path="/members/new" element={<MemberForm/>}/> {/* 회원 추가 */}

        {/* 회원 목록 보기 페이지에서 useNavigate로 /members/${item.num}/edit 요청  */}
        {/* 회원 수정 - 파라미터 값을 :[파라미터변수명(?)] 으로 받기 */}
        <Route path="/members/:num/edit" element={<MemberUpdateForm/>}/> 
      </Routes>
    </div>
  );
}

export default App;
