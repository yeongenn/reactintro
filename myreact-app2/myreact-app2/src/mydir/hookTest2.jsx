import React, {useState, useEffect} from 'react';
//import {useEffect} from 'react';
import '../App.css';
import pic1 from '../pic.png'; // 이미지 읽어오기

/*
// 기존 방법
function HookTest2(){ 
    // ...
}

export default HookTest2
*/

// export 하면서 선언하는 방법
export default function HookTest2(){ 
    const [item, setItem] = useState(0); // 동적 변수
    //const a = 1; // 정적 변수

    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    /*
    // useEffect
    부수효과(side effect)를 수행하는데 사용
    데이터 가져오기, 구독 설정, 수동 DOM 조작 등 처리

    example
    const Example = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            document.title = `You clicked ${count} times`;

            return () => {
                // Cleanup code here (like removing event listeners)
            };
        }, [count]);    // count가 변경될 때마다 effect 실행

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    };
    */
    useEffect(() => {
        let a = 2;
        console.log(a);  // 변수 a 사용
    }, []);


    // CSS styles JSON 타입 객체로 작성
    let st = {color: 'yellowgreen', textAlign: 'left', fontSize: '16pt'};

    return( 
        // Js 영역
        <div className='App'> {/* JSX 영역 */}
            <div>
                number : {item} &nbsp;
                <button onClick={incrementItem}>증가</button>&nbsp;
                <button onClick={decrementItem}>감소</button>
            </div>



            {/* CSS style 적용 - style 속성값은 {} 안에 적는다 (내용은 JSON 형태) */}
            <h3 className='blackbar'>리액트의 이해</h3> {/* external 방식 */}
            <h3 style={{color: 'tomato'}}>ECMA에 대한 선행 지식 필요</h3> {/* inline 방식 */}
            {/* 첫번째 중괄호는 Js 변수값 할당 위해서, 두번째 중괄호가 CSS 적용에 해당한다 */}
            <h3 style={st}>CSS 적용 방식에 대한 이해</h3> {/* internal 방식 */}



            {/* image 적용 1 - src 폴더 내 파일 */}
            <div>
                <img src={pic1} alt='첫번째 이미지' />
            </div>

            {/* image 적용 2 - CSS background-image 사용 */}
            <div className='img_bg'></div>

            {/* image 적용 3 - public 폴더에 있는 image 파일 */}
            <img src={`${process.env.PUBLIC_URL}/imgs/pic3.png`} alt='public 폴더 내 이미지 읽기'></img>
        </div>

        
    );
}

