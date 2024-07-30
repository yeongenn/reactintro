import React, {Component} from "react";

/*
Component의 생명주기
생성(mounting) -> 업데이트(updating) -> 제거(unmounting)

class component는 life cycle method를 사용하고
function component는 Hook을 사용한다
*/

// Class Component 생명주기 알아보기
class Clock2 extends Component{

    /*
    Class Component
    props로 기본 생성자를 호출해야 한다
    props 안 넘겨주면 에러
    */

    constructor(props){
        super(props);

        this.state = {date:new Date()}
    }

    /*
    Mount
    DOM 객체가 생성되고 브라우저에 나타나는 것을 의미

    Mount 메서드 호출 순서
    1. constructor - 컴포넌트가 생성되면 가장 먼저 실행되는 메서드, this.props this.state에 접근이 가능하고 리액트 요소 반환
    2. getDerivedStateProps - props로부터 파생된 state를 가져온다 즉 props로 받아온 것을 state에 넣어주고 싶을 때 사용
    3. render - 컴포넌트를 렌더링하는 메서드이다
    4. componentDidMount -
        컴포넌트가 마운트 됨 즉 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메서드
        이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태
        여기서는 주로 DOM을 사용해야 하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로 하는 데이터를 AJAX로 요청하는 등의 작업을 처리한다

    */

    showSigan(){
        this.setState({
            date:new Date(),
        })
    }
    
    componentDidMount(){ // 시스템에 의한 콜백
        /* 
        componentDidMount()
        컴포넌트 출력 자료가 DOM에 렌더링된 후에 실행되기 때문에
        타이머 따위의 작업을 하기에 적당한 메서드이다
        */
        
        // setInterval() - 어떤 코드를 일정 시간 간격을 두고 반복 호출 가능
        this.timerID = setInterval(
            () => this.showSigan(),
            1000
        )
    }

    /*
    Update
    Component가 업데이트 되는 것

    Update 메서드 호출 순서
    1. getDerivedStateFromProps - 컴포넌트의 props나 state가 바뀌었을 때도 해당 메서드 호출
    2. shouldComponentUpdate - 컴포넌트 리렌더링 여부 결정하는 메서드로 React.memo와 유사하다 반환 값은 boolean
    3. componentDidUpdate - 컴포넌트가 업데이트 되고 난 후 발생, 의존성 배열이 변할 때만 useEffect가 실행하는 것과 동일
     */

    
    /*
    Unmount
    컴포넌트가 화면에서 사라지는 것
    
    Unmount 메서드
    componentWillUnmount - 
        컴포넌트가 화면에서 사라지기 직전에 호출
        여기서 주로 DOM에 직접 등록했었던 이벤트를 제거
        예컨대 setTimeout 설정한 것이 있다면 clearTimeout 통해 제거
        외부 라이브러리를 사용했고 해당 라이브러리에 dispose 기능이 있다면 여기서 호출해주면 된다
    */

    componentWillUnmount(){ // 시스템에 의한 콜백
        /*
        사용된 메모리 등의 작업 마무리
        SPA를 개발할 때는 메모리 누수(leak)를 방지하는 작업이 필요하다
        이런 작업들이 이루어지는 메서드가 componentWillUnmount()
        */ 
        clearInterval(this.timerID); // setInterval() 해제

    }

    render(){
        return (
            <div>
                <h3>Hello!</h3>
                <h2>지금 시간은 {new Date().toLocaleTimeString()}</h2>
                <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

/*

*/

export default Clock2;