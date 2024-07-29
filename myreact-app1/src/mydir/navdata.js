import { Component } from "react";

// class
class NavData extends Component{
    render(){
        return(
            <ul>
                <b>{this.props.msg}</b>
                <li><a href="https://www.naver.com">naver</a></li>
                <li><a href="https://www.daum.net">daum</a></li>
                <li><a href="../abc.html">abc.html</a></li>
            </ul>
        );
    }
}

export default NavData;