import React, { Component } from 'react';
import './App.css';
import NavData from './mydir/navdata';

// Component
// 조립식 프로그래밍이 가능해진다
// 방법 2가지 - 클래스, 함수


// 클래스 컴포넌트
// Component 상속해야 한다
// render 메서드 사용
// return 내용은 html X, JSX O
class Subject extends Component{
  render(){
    return(
      <header>
        <h2>머리글 : 웹 문서</h2>

      </header>
    );
  }
}

// 함수 컴포넌트
// 마찬가지로 return 내용은 html X, JSX O
function Welcome(props){ // 부모가 넘겨준 값 받아오기, props는 키워드
  return(
    <article> {/* html 태그 중 JSX에서는 지원하지 않는 종류도 있다 */}
      {props.who} 글 기사 내용 {/* 받아온 값 변수로 넣어주기 */}


    </article>
  );
}

function App() {
  return (
    <div>
      연습용
      <Subject></Subject>  {/* 컴포넌트 호출 */}
      <br/>
      <Welcome></Welcome>
      <br/>
      <Welcome who='yeye'></Welcome> {/* 부모가 자식에세 값 할당 가능, 여기서는 속성명은 who, 값은 ye */}
      <br/>
      <NavData msg='출발'></NavData> {/* 함수와 달리 파라미터로 전달 X */}
    </div>
  );
}

export default App;
