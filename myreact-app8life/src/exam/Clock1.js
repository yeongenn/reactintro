import React from "react";
class Clock1 extends  React.Component{
    /*
    constructor(props){
        super(props);
    };
    */

    render(){
        return (
            <div>
                <h3>안녕~</h3>
                <h3>지금은 {new Date().toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock1;