import React from 'react';

const Footer = () => {
    return (
        <div className='footer' style={{backgroundColor:'yellow'}}>
            <div className='footer-content'>
                <div>
                    <h5>JMT</h5>
                    <p>개인정보처리방침</p>
                    <p></p>
                </div>
                <div className='footer-location'>
                    <p>(63122)서울특별시 관악구 봉천로 어쩌구 저쩌구</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;