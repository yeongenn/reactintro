import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
    MdModeEditOutline,
  } from 'react-icons/md';
  import cn from 'classnames';

// to do
// todo - 부모 컴포넌트(TodoList)로부터 props (todo) 전달받기
// onRemove - 일정 항목 클릭했을 때 onRemove 함수 작동되게끔
function TodoListItem({
        todo, 
        onRemove,
        onToggle
    }){
    const {id, text, checked} = todo; // 구조 분해 할당으로 todo.id, todo.text, todo.checked를 각각 할당

    // 개별 to do 반환
    return (
        <li className="TodoListItem">
            {/* 
            classnames(cn) 함수
            인자에 들어간 값이 true면 class로 넣어준다
            여기서 첫번째 인자 checkbox는 checkbox:true의 줄임말
            체크유무에 상관없이 checkbox 클래스는 필요하기 때문에 true로 처리
             */}
             {/* checked=true 일 때 checked라는 className 추가 */}
            <div className={cn('checkbox', {checked : checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                {/* checked=true면 체크된 박스 아이콘, false면 빈 박스 아이콘 */}
                <div className="text">{text}</div>
            </div>
            <div className="edit">
                <MdModeEditOutline/>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
            {/* onClick 이벤트로 onRemove(id) 넘기기 - 삭제 아이콘 클릭 시 해당 일정 항목의 id가 onRemove의 인자로 전달 */}
                <MdRemoveCircleOutline/>
            </div>

        </li>
    );
}

export default TodoListItem;