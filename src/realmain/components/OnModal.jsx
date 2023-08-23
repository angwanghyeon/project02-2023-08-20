import React from 'react';
import style from '../css/OnModal.css'

const OnModal = ({setModalOpen, id, title, content, writer}) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='modal-container'>
      <button className='modal-close' onClick={closeModal}>X</button>
        <div className='answer-writer'>
          <p className='name'>답변 작성자 이름</p>
          <p className='date'>작성일자</p>
        </div>
        <div className='answer-content'>
          <textarea cols="30" rows="10" className='answer-inside' placeholder='답변을 작성해주세요'></textarea>
        </div>
    </div>
  );
};

export default OnModal;