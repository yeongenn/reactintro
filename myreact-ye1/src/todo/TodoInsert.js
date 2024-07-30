import React, {useState, useCallback} from "react";
import { MdAdd } from 'react-icons/md';

// to do list 입력 창
function TodoInsert({onInsert}){
    
    const [value, setValue] = useState('');

    // useCallback <- 설명 추가하기
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value 초기화
            e.preventDefault(); // 새로고침 방지
        }
    , [onInsert, value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={value} placeholder="enter yoru to do"/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );

}

export default TodoInsert;