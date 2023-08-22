import React, { useRef, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import style from '../css/QnABoard.css';
import { useNavigate } from 'react-router-dom';
import { qnaData } from '../data/Data';
import TestTr from './TestTr';
import Paging from './Paging';


const Tr = (props) => {
  const navigate = useNavigate();
  const { no, Q, category, title, content, createDate } = props.data;

  
  // lastPage.current = newQnaData.length / offset;
  return (
    <tr onClick={() => navigate('/qna/detail/' + no)}>
      <td>{Q}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>{createDate}</td>
    </tr>
  );
}
const QnaPaging = () => {
  const [newQnaData, setNewQnaData] = useState(qnaData);
  const [page, setPage] = useState(1);
  const offset = 10;
  const startPage = (page - 1) * offset;
  const lastPage = startPage + offset;
  const currentItems = qnaData.slice(startPage, lastPage);

  return (
    <div>
      {Array.from({length:Math.ceil(qnaData.length / offset)}).map((_,index)=> (
        <button key={index} onClick={() => setPage(index + 1)}>{index+1}</button>
      ))}
    </div>
  )
}

const QnABoard = () => {
  const [newQnaData, setNewQnaData] = useState(qnaData);
  const offset = 10;

  return (
    <div className='content'>
      <h1 style={{ textAlign: 'left' }}>
        <img src="../img/qna-icon.png" alt="qna아이콘" />
      </h1>
      <div className='QnA'>
        <h2>Q & A <input type="text" placeholder='검색어를 입력하세요' />
          <button><VscSearch /></button>
        </h2>
      </div>
      <div className='qna-table'>
        <div className='page-choice'>
          <select >
            <option value="10">10개씩</option>
            <option value="15">15개씩</option>
            <option value="20">20개씩</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Q</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성일자</th>
            </tr>
          </thead>
          <tbody>
            {newQnaData.map((id, index) => {
              if(index <= offset) {
                return (
                  <Tr data={newQnaData[index]} key={newQnaData[index].id}></Tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className='page'>
        <QnaPaging></QnaPaging>
      </div>
    </div>
  );
};

export default QnABoard;