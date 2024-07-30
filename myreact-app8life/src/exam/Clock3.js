import {useState, useEffect} from "react";

const Clock3 = () => {
    // useState로 state를 초기화
    const [date, setDate] = useState(new Date());

    
    // useEffect
    // useEffect를 사용하면 내부적으로 생명주기 함수가 수행 - componentDidMount, componentDidUpdate, componentWillUnmount
    // 첫번째 인자 - 실행할 함수
    // 두번째 인자 - 의존성 배열 (이 배열에 포함된 값이 변경될 때만 effect가 재실행, 빈 배열 넣으면 mount, unmount 때만 실행)
    useEffect(() => {
        // class의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showSigan(), 1000);

        // class의 componentWillUnmount()를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        }

    }, []); // useEffect 쓸 때 배열 잊지말기~!

    const showSigan = () => {
        setDate(new Date());
    }

    return(
        <div>
            <h3>Hi~</h3>
            <h2>지금 시간은 {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock3;