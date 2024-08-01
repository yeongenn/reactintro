import {legacy_createStore as createStore} from "redux";

/*
    createStore
    3개의 파라미터를 가진다 - reducer, preloadedState, enhancer
    (이번 실습에서는 reducer, enhancer 인듯..?)

    reducer method
    어플리케이션 상태를 변경하는 함수
    state와 action을 전달받아 상태 변환 후 반환

    reducer method 작동 과정
    1) action 타입을 분석
    2) 이전 상태를 다음 상태로 변환
    3) 다음 상태를 반환
*/

/*
Action
type field를 가지고 있는 plain javascript object
type field - action을 묘사하는 이름(feature)을 가진 string이어야 한다
*/
export default createStore(function(state, action){
    // state - 데이터(값)
    // action - 데이터에 가해지는 행위
    if(state === undefined){
        return {number:0} // number 초기화
    }
    if(action.type === 'INCREMENT'){ // 
        return {...state, number:state.number + action.size}
    }

    return state;

}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

/* 
    createStore 두번째 매개변수는
    REDUX_DEVTOOLS를 사용하기 위한 지정값이다
*/