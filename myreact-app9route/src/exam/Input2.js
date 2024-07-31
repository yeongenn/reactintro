import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum:'',
        nai:'',
        juso:'',
    });

    const {irum, nai, juso} = params;


    // event handler
    const changeFunc = (e) => {
        const value = e.target.value; // irum, nai, juso 중 하나
        const id = e.target.id;
        console.log(id);

        setParams({
            ...params,
            [id]:value // 배열 복사해올 때 고유값 주기 <- 에러방지용
        })
    }

    return(
        <div>
            <br/>
            <br/>
            <div>
                <label for="irum">이름 : </label>
                <input type="text" value={irum} id="irum" onChange={changeFunc} />
            </div>
            <div>
                <label for="nai">나이 : </label>
                <input type="text" value={nai} id="nai" onChange={changeFunc} />
            </div>
            <div>
                <label for="juso">주소 : </label>
                <input type="text" value={juso} id="juso" onChange={changeFunc} />
            </div>
            <br/>
            <h3>처리 결과</h3>
            <table border={1}>
                <tr>
                    <td>이름은 {irum}</td>
                    <td>나이는 {nai}</td>
                    <td>주소는 {juso}</td>
                </tr>
            </table>
        </div>
    );
}

export default Input2;