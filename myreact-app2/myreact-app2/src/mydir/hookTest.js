import React, {useState} from 'react';

/*
Hook

리액트 훅은 리액트 클래스형 컴포넌트에서 이용하던 코드를 작성할 필요없이
함수형 컴포넌트에서 다양한 기능을 사용할 수 있게 만들어준 라이브러리

class를 사용하지 않고 function으로 상태값(state)과
생명주기 기능(lifecycle feature)을 사용할 수 있다
함수형 컴포넌트로 상태값 접근과 자식 요소에 접근이 가능하다

*/

// function HookTest(){ }

const HookTest = () => {
    /*
    useState 형식
    const [state, setState] = useState(initialStateValue)
    const [데이터, 데이터변경함수] = useState(초기값)

    클래스 컴포넌트에서는 -------------------------------

    // 멤버필드
    state = { 
        count: 0
    };

    // 메서드
    countUpdate(n){
        this.setState({count:n});
    }

    render(){
        // count 변수 선언
        let {count} = this.state;

        return (
            <div>
                number : {count} &nbsp;
                <button onClick={()=>{
                this.countUpdate(count + 1)
                }}>증가 1</button>
                <hr/>
            </div>
         );
    }

    이렇게 사용했다 ---------------------------------------

    */
    const [count, setCount] = useState(0);

    return (
        <div>
            number : {count} &nbsp;
            {/* EventHandler 없이 바로 setCount 호출 */}
            <button onClick={() => setCount(count + 1)}>증가 2</button>
        </div>
    );
};

export default HookTest