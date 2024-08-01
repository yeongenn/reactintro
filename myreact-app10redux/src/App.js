import './App.css';
import React, {Component} from "react";
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {
  state = {number:10}

  render(){
    return (
      <div className="App">
        <h2>Main</h2>
        {/* 
          App이 가진 state 변수 number + size (<- AddNumberSuper가 전달한 값)

          AddNumberSuper가 전달한 size값을 App의 state.number에 더하기
          .bind(this) 안 써주면 에러뜬다 - Cannot read properties of undefined (reading number)

          bind(this)
          현재 컴포넌트 인스턴스에 바인딩 
          이를 통해 함수가 호출되었을 때 해당 인스턴스를 참조할 수 있도록 해준다
          클래스형 컴포넌트에서만 유효하겠네
        */}

        {/* Redux 사용하면 props 넘겨줄 필요 X */}
        {/* 
        <AddNumberSuper
          onClick={function(size){
            this.setState({number:this.state.number + size})
          }.bind(this)}/>
          (App) number : {this.state.number}
        <ShowNumberSuper number={this.state.number}/>
         */}

        <AddNumberSuper></AddNumberSuper>
        <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
  
}

export default App;
