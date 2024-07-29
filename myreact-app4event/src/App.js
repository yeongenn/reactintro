import React, {useState} from "react";
import Subject from './mydir/Subject';
import Welcome from './mydir/Func';

// const App = () => {
function App() {
  // useState
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'리액트'});

  // useState - w/o setter
  const [friends] = useState([
    {bun:1, irum:'관우', nai:33},
    {bun:2, irum:'장비', nai:23}
  ]);

  // EventHandler
  const handleChangePage = () => {
    // friends 배열값 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}살`);
    });

    setSubject(prevSubject => ({ 
      /*
      이전 상태인 prevSubject(subject)을 받아 변환
      전개연산자(Spread Operator) 사용
      객체에서는 spread 연산자를 이용하여 객체의 프로퍼티를 업데이트 하거나 복사할 수 있다
      */
      ...prevSubject,
      title:'버튼에 의해 제목 변경',
      content:'가나다'
  
    }));
  }

  return (
    <div className="App">
      이벤트 연습<br/>
      <br/>
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handleChangePage}
      />
      {/* title, subtitle, changePage : App에서 Subject 컴포넌트로 전달되는 props값 */}
      <br/>
      <br/>
      <Welcome 
        subtitle = {subject.subtitle}
        friends  = {friends}
        changePage = {handleChangePage}
      />
    </div>
  );
}

export default App;
