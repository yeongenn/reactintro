import React from "react";

// Member Component
// 편의상 하나의 파일에 작성
const Member = ({memberData}) => {
    return (
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    );
}

// 메인 컴포넌트
const MultiData = () => {
    
    const members = [
        {
            irum:'관우',
            junhwa:'111-1111'
        },
        {
            irum:'장비',
            junhwa:'222-1111'
        },
        {
            irum:'유비',
            junhwa:'333-1111'
        },
    ];

    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>전화</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 향상된 for문과 같은 결과, members에서 하나씩 꺼내오기 */}
                    {/* 배열 렌더링 시 각 요소에 고유 key를 추가 - 에러방지용 */}
                   {members.map((mem, index) => (
                    <Member 
                        key={index} /* 없어도 되지만 에러방지용~! */
                        memberData={mem}
                    />
                   ))}
                </tbody>
            </table>
        </div>
    );
}

export default MultiData;