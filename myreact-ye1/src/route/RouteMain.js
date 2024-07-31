import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Products from './Products';

const RouteMain = () => {


    return(
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/home"> HOME </Link> |
                    <Link to="/about"> ABOUT </Link> | 
                    <Link to="/products"> PRODUCTS </Link>
                </nav>
                <br/>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}>
                    {/* 중첩 라우팅 - 서브페이지, 이때 서브 페이지 path에는 / 생략 */}
                        <Route path="location" element={<div>중첩 라우팅 연습~</div>}></Route>
                    </Route>
                    <Route path="/products" element={<Products/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default RouteMain;