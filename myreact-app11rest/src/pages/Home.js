import {Link} from 'react-router-dom';

export default function Home (){

    return(
        <>
            <h2>메인 페이지</h2>
            <h4>공지 사항</h4>
            <ul>
                <li>
                    <Link to="/members">회원 목록</Link>
                </li>
            </ul>
        </>
    );
}