import React, {useState, useCallback} from "react";

// 수정하기
function TodoEdit({selectedTodo, onUpdate}){
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            setValue(''); // value 초기화
            e.preventDefault(); // 새로고침 방지
        },
        [value],
    );

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="todoedit__insert">
                <h3>수정하기</h3>
                <input
                    onChange={onChange}
                    value={value}
                    placeholder="할 일을 입력하세요"
                />
                <button type="submit">수정하기</button>
            </form>

        </div>
    );

}

export default TodoEdit;