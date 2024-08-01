import React, {Component} from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component {
    render(){
        return(
            <div id="super">
                <h3>Show Number Super</h3>
                (ShowNumberSuper) number : {this.props.number}

                {/* Redux 사용하면 자식 태그에 props 전달해줄 필요 X */}
                <ShowNumber /*number={this.props.number}*/ ></ShowNumber>
                
            </div>
        );
    }
}