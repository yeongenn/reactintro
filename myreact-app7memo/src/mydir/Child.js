import React, {memo} from "react";

// CSS
const boxStyle = {border:'1px solid blue', padding:'20px'};

//function child({irum, nai}){...}

const Child = ({irum, nai}) => {
    console.log(`자녀 나이 바뀜(rendering)`);

    return (
        <div style={boxStyle}>
            <h3>자녀1</h3>
            <p>이름 : 신통한</p>
            <p>나이 : 5살</p>
            <h3>자녀2</h3>
            <p>이름 : {irum}</p>
            <p>나이 : {nai}</p>
        </div>
    );
}

//export default Child;

// 반환 컴포넌트를 memo 메서드로 감싸주면 memo 기능이 활성화
export default memo(Child); 
