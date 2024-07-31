import React, {useState, useEffect} from "react";

const Jikwon = () => {
    const [error, setError] = useState(null); // 에러 관리
    const [isLoaded, setIsLoaded] = useState(false); // boolean
    const [jikwons, setJikwons] = useState([]);

    useEffect(() => {
        //fetch("/web_react/jikwon.jsp", {method:'GET'}) // 수작업 JSON 데이터
        fetch("/web_react/jikwonJson.jsp", {method:'GET'}) // JSON-simple 라이브러리 사용
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                //setJikwons(result.jikwons);
                setJikwons(result); // 배열 대표명 없으면 안 적어줘도 된다
            },
            (error) => {
                setIsLoaded(true); // 
                setError(error);
            }
            
        )
    }, []); // 빈 배열인 경우 한번만 렌더링

    if(error){
        return (
            <div>
                에러 : {error.message}
            </div>
        );
    } else if(!isLoaded){
        return (
            <div>
                자료 수신 중 ...
            </div>
        );
    } else {
        return(
            <table border={1}>
                <thead>
                    <td>사번</td>
                    <td>직원명</td>
                    <td>부서명</td>
                    <td>직급</td>
                </thead>
                <tbody>
                    {jikwons.map((jikwon) => (
                        <tr>
                            <td>{jikwon.jno}</td>
                            <td>{jikwon.jname}</td>
                            <td>{jikwon.bname}</td>
                            <td>{jikwon.jik}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={4}>인원수 : {jikwons.length}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

}

export default Jikwon;