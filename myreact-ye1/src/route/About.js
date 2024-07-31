import React from "react";
import {Outlet} from 'react-router-dom';

const About = () => {

    return (
        <div>
            <div>
                <h3>About Page</h3>
                여기는 About 페이지 입니당
            </div>
            {/* Outlet - 부모 라우트 컴포넌트에서 자식 라우트 컴포넌트의 위치 지정해주기 */}
            {/* 부모 라우트 컴포넌트 - About, 자식 라우트 컴포넌트 - <div>중첩 라우팅 연습~</div> */}
            <Outlet/>
        </div>
    );
}

/*
Outlet 없이 중첩 라우팅 하기

<Routes>
    ...
    <Route path="/about/*" element={<About/>}></Route>
    ...
</Routes>

와일드 카드 사용해서 about/ 뒤에 더 올 수 있다고 명시
이후 해당 컴포넌트에 가서 서브 페이지로 렌더링할 Routes와 Route를 작성

// About Component
const About = () => {

    return (
        <div>
            <div>
                <h3>About Page</h3>
                여기는 About 페이지 입니당
            </div>

            <Routes>
                <Route path="/location" element={[tag or component]}></Route>
            </Routes>
        </div>
    );
}
 */
export default About;