import React from "react";
import TodoListItem from "./TodoListItem";

// to do list
// props로 todos 전달받기
// map()으로 todos 배열 각 항목들을 TodoListItem 컴포넌트로 가공
// TodoListItem에 id, text, checked가 개별 props로 전달
function TodoList({
        todos, 
        onRemove,
        onToggle
    }){

    return(
        <ul className="TodoList"> {/* CSS용 className */}
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}

export default TodoList;