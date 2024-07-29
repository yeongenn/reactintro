import React, {Component} from "react";

/*
class MyName extends Component {
    // static defaultProps = { // props에 기본값 부여
    //     name: '기본 이름'
    // }

    render(){
        return (
            // this.props는 keyword!
            <div>
                안녕~ 내 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}


// static으로 선언한 defaultProps는 이렇게도 작성 가능하다
MyName.defaultProps = { // props에 기본값 부여
    name: '기본 이름'
}
*/

// ---------------------------------------------------------------

// 클래스를 함수로 소스 코드 변환 1
/*
function MyName(propsprops){
    
    return(
        // 클래스가 아니니까 this가 필요 X
        <div>
            안녕하세요~ 내 이름은 <b>{propsprops.name}</b>
        </div>
    );
}
*/

// 클래스를 함수로 소스 코드 변환 2
const MyName = ({name}) => {
    return(
        <div>
            안녕하세요 내 이름은 <b>{name}입니다</b>
        </div>
    );
}

export default MyName;