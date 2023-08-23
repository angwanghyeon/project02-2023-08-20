import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <img src="../img/JMT-icon.jpg" alt="" />
            <nav className='head-menu'>
                <ul className='main-nav'>
                    <li className='info'>
                        <Link to='/info/knowledge'>여행정보</Link>
                        <div className='info-detail'>
                            <ul>
                                <Link to='/info/knowledge'><li>지식in</li></Link>
                                <Link to='/info/festival'><li>축제 및 행사</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className='notice'>
                        <Link to='/notice'>공지사항</Link>
                        <div className='notice-detail'></div>
                            <ul>
                                <Link to='/notice'><li>공지사항</li></Link>
                                <Link to='/qna'><li>QnA</li></Link>
                            </ul>
                    </li>
                    <li className='login'>
                        <Link to='/login'>로그인</Link>
                    </li>
                    <li className='language'>
                        <Link to={'/'}>language</Link>
                    </li>
                </ul>
            </nav>          
        </div>
    );
};

export default Header;