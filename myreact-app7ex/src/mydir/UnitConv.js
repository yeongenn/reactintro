import React, {memo} from "react";

// CSS(?)

//
function UnitConv(props){

    return (
        <div>
           <span>{props.centimeter} cm 입니다</span>
        </div>
    );
}

// 여기에서는 memo 쓰는 의미가 X ?
export default memo(UnitConv);