import './App.css';
import Clock1 from './exam/Clock1';
import Clock2 from './exam/Clock2';
import Clock3 from './exam/Clock3';
import MyComponent from './exam/MyComponent';
import MyComponent2 from './exam/MyComponent2';
import MyForm from './exam/MyForm';



function App() {
  return (
    <>
      <h3>리액트 생명주기 연습용 - 디지털 시게</h3>
      <Clock1 />
      <hr></hr>
      <Clock2 />
      <hr></hr>
      <Clock3/>
      <hr></hr>
      <MyComponent/>
      <hr></hr>
      <MyComponent2/>
      <hr/>
      <hr/>
      Form 작업 (생명주기와 상관 X) - 사용자와 웹 페이지 간 상호작용
      <br/>
      <MyForm/>

    </>
  );
}

export default App;
