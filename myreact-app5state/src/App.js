/* eslint-disable*/


import './App.css';
import React, {useState} from 'react';


function App() {
  // 일반 데이터
  let irum = 'JSX 사용법 : 일반 데이터';

  /*
  state
  state는 변수, const, let 등으로 선언한 변수와 달리 값이 변하면
  관련 있는 컴포넌트들이 리렌더링이 되어 화면이 바뀐다
  */

  // state 데이터
  let [title, setTitleFunc] = useState('자바스크립트'); // 문자열 기억
  let [title2, setTitleFunc2] = useState(['리액트', '뷰']); // 배열 자료 기억
  

  // 이벤트 처리 함수 1
  // 이 함수 자체를 컴포넌트로 만들 수도 있겠지? <- 이게 더 좋은 방법
  function dataUpdate(){
    // let newArr = [...title]; // 전개연산자에 의해 문자열이 낱개 문자로 분리되어 배열로 복사
    // console.log(newArr);

    console.log(title); // 초기값으로 넣어준 '자바스크립트'
    title = 'React~';
    setTitleFunc(title); // title state는 setTitleFunc 함수로 값 수정
    console.log(title); // 변경된 데이터값 'React~'
  }
  
  // 이벤트 처리 함수 2
  function dataUpdate2(){
    // 배열값 일부 수정 위해 전개 연산자로 배열값 복사
    // 전개연산자 - 배열은 , 기준으로 분리
    let newArr = [...title2]; 
    //let newArr = title2;
    console.log(newArr);
    newArr[1] = '뷰 화이팅'; // 배열 값 변경
    setTitleFunc2(newArr); // title2 값을 변경하기 위해 setTitleFunc2 함수 사용

  }

  // 이벤트 처리 2
  let [count, setCount] = useState(0);





  return (
    <div className="App">
      <div className='blue_bar'>
        <h3>리액트 state 이해</h3>
        </div>

        <div className='list'>
          <h3>{title}</h3>
          <span>{irum}</span><br/>
          <p>state 확인</p>
          <button onClick={dataUpdate}>title 값 변경</button>
          <hr/>

        </div>

        <div className='list'>
          <h3>title2[0] : {title2[0]}</h3>
          <h3>title2[1] : {title2[1]}</h3>
          <p>state 확인</p>
          <button onClick={dataUpdate2}>title2 값 변경</button>
          <hr/>

        </div>

        <div>
          이모티콘 클릭 : <span onClick={
            () => {
              setCount(count + 1);
            }
          }>^^</span>{count}번 클릭!
        </div>
      
      
    </div>
  );
}

export default App;
