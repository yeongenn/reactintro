import React, {Component} from "react";

// function
/*
function Greeting (props){


    return(
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    );
}

export default Greeting;
*/

// class
class Greeting extends Component{
    render(){
        return(
            <div>
            <h1>Hello, {this.props.name}!</h1>
        </div>
        );
    }
}

export default Greeting;
