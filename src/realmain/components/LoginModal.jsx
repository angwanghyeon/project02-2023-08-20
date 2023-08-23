import React from 'react';

const LoginModal = ({setModalOpen, id, title, content, writer}) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='modal-container'>
      <button className='modal-close' onClick={closeModal}>X</button>
      <div className='id'>
        <input type="id" placeholder='아이디를 입력해주세요' />
      </div>
      <div className='pwd'>
        <input type="password" placeholder='비밀번호를 입력해주세요'/>
      </div>
    </div>
  );
};

export default LoginModal;