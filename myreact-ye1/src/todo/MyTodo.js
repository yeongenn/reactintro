import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import TodoEdit from './TodoEdit';

// 편의용 컨테이너

function MyTodo(){

    // useState로 to do 관리
    const [todos, setTodos] = useState([
        {
            id:1,
            text:'오늘 배운 코드 복습하기',
            checked: false, // boolean
        },
        {
            id:2,
            text:'12시 전에 일과 마무리하기',
            checked: false,
        },
        {
            id:3,
            text:'일기쓰기',
            checked: true,
        },
    ])

    // todos 배열에 새로운 to do 추가하기
    // useRef <- 설명 추가하기
    const nextId = useRef(4); // 기본값으로 3까지 줬으니 초기값은 4로 세팅
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id:nextId.current,
                text,
                checked:false,
            };
            setTodos(todos.concat(todo)); // concat() 통해 기존 값에 합치기
            nextId.current++; // nextId auto_increment랄까
        },
    [todos],
    )

    // (수정하기) 팝업창 보여줄 toggle 기능 구현
    const [selectedTodo, setSelectedTodo] = useState(null); // 클릭한 일정 항목의 todo 객체 가져오기
    const [insertToggle, setInsertToggle] = useState(false); // boolean, 플래그 역할을 해 줄 state 관리

    const onInsertToggle = () => { 
        // 만약 selectedTodo에 값이 있다면(일정 항목을 클릭한 상태라면) null로 리셋하고
        // insertToggle의 값을 바꿔서 창을 껐다 켤 수 있도록
        if (selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToggle((prev) => !prev); // true <--> false 
    };

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    };


    // 리스트에서 id로 항목 지우기
    // filter() 사용
    // id를 인자로 받은 후 todos 배열에서 id가 일치하지 않은 것들만 모아 새로운 배열로 반환 -> id가 일치하는 것만 제외가 되겠지?
    // 그럼 그 id는 어떻게 받아오냐?
    // 해당하는 TodoListItem을 클릭하면 해당 컴포넌트 id를 가져오도록 설정
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) => 
                    todo.id === id ? {...todos, checked: !todo.checked} : todo,
                )
            )
        }, [todos],
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} /* onInsert 함수를 TodoInsert에 props로 전달 그러고 나서 onSubmit 이벤트에 onInsert 함수를 전달 */ />
            <TodoList  /* TodoList 컴포넌트에 props로 todos 전달 */
                todos={todos}
                onToggle={onToggle} 
                onRemove={onRemove} 
                onChangeSelectedTodo={onChangeSelectedTodo} 
                onInsertToggle={onInsertToggle} 
            >
                <TodoListItem />
            </TodoList>
            {/* insertToggle 값이 true면 팝업창 부르고 false면 X */}
            {insertToggle && (
                <TodoEdit 
                selectedTodo={selectedTodo}
                onUpdate={onUpdate}
                />
            )}
            
        </TodoTemplate>
    );
}

export default MyTodo;