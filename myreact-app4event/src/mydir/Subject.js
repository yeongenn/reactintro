import React, {Component} from "react";

class Subject extends Component{
    render(){
        const clickHandler = () => {
            console.log(`두번째 버튼 클릭 성공`);
        }

        // textbox의 key up 이벤트 핸들러
        const keyUpHandler = (e) => {
            console.log(`text key up event`);
            console.log(`입력한 값 : `, e.target.value);
        }

        return(
            <header>
                <h3>머리글 : {this.props.title}</h3>
                {this.props.subtitle}
                <br/>
                <br/>
                Button Event:
                {/* 
                (부모로부터 넘어온) props로 넘어온 changePage를 실행
                bind(this) ?
                */}               
                <br/>
                <br/>
                <button onClick={
                    function(){
                    this.props.changePage();
                    }.bind(this)
                }>{this.props.subtitle}</button>
                <br/>
                <br/>
                <button onClick={clickHandler}>두번째 버튼</button>
                <br/>
                <br/>
                <input type="text" onKeyUp={keyUpHandler} />
            </header>  
        );
    }
}

export default Subject;