import React, {useState, useEffect} from "react";
import axios from "axios";

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
    
    
    // axios 버전
    /*
    useEffect(() => {
        axios.get("/test4")
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
    */


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
                    <li key={data.no}>
                        {data.no} {data.name} {data.pay}
                    </li>
                ))}
            </ul>
        );
    }

}

export default Test4;