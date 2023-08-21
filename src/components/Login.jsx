import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import style from '../css/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-content'>
      <div className='login-title'>
      <h1>로그인</h1>
      <p style={{fontSize:'large'}}>로그인하시면 다양한 기능을 사용할 수 있습니다.</p>
      </div>
      <div className='login-active'>
          <img src="../img/JMT-icon.jpg" alt="jmt아이콘" style={{marginTop:'30px'}} />
        <div className='login-input'>
          <input type="id" placeholder='아이디를 입력해주세요' className='id' /><br />
          <input type="password" placeholder='비밀번호를 입력해주세요' className='pw' />
        </div>
          <div className='login-check'>
            <p>아이디 저장 <input type="checkbox" /></p>
          </div>
          <div className='login-btn'><button>로그인</button></div>
        <div className='회원가입'>
          <p>
            <button>회원가입</button><button>아이디/비밀번호찾기</button>
          </p>
        </div>
        <div className='sns-login'>
          <Link to='/kakao'><img src="../img/JMT-icon.jpg" alt="" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;