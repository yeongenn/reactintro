import React, {Component} from "react";

import store from '../store';

export default class AddNumber extends Component {
    state = {size:1}

    render(){
        return(
            <div>
                <h3>Add Number</h3>
                {/* 
                    + 버튼 클릭 시 size값이 상위 컴포넌트로 전달될 수 있게 onClick 구현 
                    props로 전달받은 onClick 함수를 호출하는데 현재 컴포넌트의 state인 size값을 전달한다
                    (this.props.)onClick 함수는 AddNumberSuper에서 작성해 준다

                    this.props.onClick - 부모 컴포넌트의 onClick 메서드를 호출
                    this.state.size가 상위 컴포넌트로 전달될 수 있도록 onClick 이벤트 추가

                */}

                {/* Redux 사용 전 */}
                {/* 
                <input 
                    type="button" 
                    value="+"
                    onClick={function(){                       
                        this.props.onClick(this.state.size)
                    }.bind(this)}
                ></input>
                */}

                {/* Redux 사용 */}
                <input 
                    type="button" 
                    value="+" 
                    onClick={function(){
                        store.dispatch({type:'INCREMENT', size:this.state.size});
                    }.bind(this)}
                ></input>

                <input 
                    type="text" 
                    value={this.state.size}
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                    }.bind(this)}
                ></input>
                
            </div>
        );
    }
}