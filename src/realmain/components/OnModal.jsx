import React from 'react';
import style from '../css/OnModal.css'

const OnModal = ({setModalOpen, id, title, content, writer}) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='modal-container'>
      <button className='modal-close' onClick={closeModal}>X</button>
        <p>답변 양식 작성중</p>
    </div>
  );
};

export default OnModal;