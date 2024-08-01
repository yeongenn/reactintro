import React, {Component} from "react";

import store from "../store";

export default class ShowNumber extends Component {
    // store에서 number 값 가져오기
    state = {number:store.getState().number}

    // store 구독 구현
    constructor(props){
        super(props);

        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }

    render(){
        return(
            <div>
                <h3>Show Number</h3>

                {/* Before Redux */}
                {/* 
                <input type="text" value={this.props.number} readOnly></input>
                */}

                {/* After Redux */}
                <input type="text" value={this.state.number} readOnly></input>



            </div>
        );
    }
}