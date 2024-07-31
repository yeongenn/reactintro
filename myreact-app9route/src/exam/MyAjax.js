import React, {useState, useEffect} from "react";

// AJAX로 JSON 데이터 가져오기
const MyAjax = () => {
    
    const [error, setError] = useState(null); // 에러 관리
    const [isLoaded, setIsLoaded] = useState(false); // boolean
    const [items, setItems] = useState([]);

    // fetch 사용해 Apache server에 있는 JSP 자료 읽기
    // Ajax 처리에 성공하면 isLoaded, items를 갱신
    // 실패하면 error를 갱신하겠지?
    useEffect(() => {
        // CORS
        // Apache Server에서 context명 이하 주소 가져오기
        fetch("/web_react/abc.jsp", {method:'GET'})
        // 연결에 성공하면~
        .then(res => { // response 객체
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        // 자료 읽어오는데 성공하면~
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items); // 배열대표명 items, 이때 , 제대로 안 적어주면 에러뜬다~!
            },
            (error) => {
                setIsLoaded(true); // 
                setError(error);
            }
            
        )
    }, []); // 빈 배열인 경우 한번만 렌더링

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩메세지
    // 그 외에는 items를 출력(렌더링)
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
            <ul>
                {items.map((item) => (
                    <li>
                        {item.code} {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }

    
}

export default MyAjax;

