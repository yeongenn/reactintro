import './App.css';
import MyName from './mydir/myname';

function App() {
  return (
    <div className="App">
      메인<br/>
      컴포넌트에서 사용하는 데이터는 props와 state가 있다<br/>
      props : 부모 컴포넌트가 자식 컴포넌트에 주는 값, 단방향<br/>
      state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능<br/>
      <br/>
      props나 state 값이 변경되면 컴포넌트는 re-rendering 된다
      <hr></hr>
      <MyName/>
      <br/>
      <MyName name="한국인" /* name이라는 props 값 전달 */ />
    </div>
  );
}

export default App;
