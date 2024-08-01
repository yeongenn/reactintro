import React, {useState, useEffect} from "react";

// AJAX로 가져온 JSON 데이터 다루기
const Test4 = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false); // boolean
    const [datas, setDatas] = useState([]);

    // fetch
    // useEffect
    useEffect(() => {
        fetch("/test4", 
            {
                method:'GET'
            })
        .then((res) => {
            if(!res.ok){
                throw new Error('');
            }
            return res.json();
            //return res.text();
        })
        .then(
            (result) => {
                setLoaded(true);
                setDatas(result);
            },
            (error) => {
                setLoaded(true);
                setError(error);
            }
        )
    }, []);

    // 
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
                {datas.map((data) => (
                    <li>
                        {data.no} {data.name} {data.pay}
                    </li>
                ))}
            </ul>
        );
    }

}

export default Test4;