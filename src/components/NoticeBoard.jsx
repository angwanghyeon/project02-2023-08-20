import React, { useState } from 'react';
import style from '../css/NoticeBoard.css'
import { VscSearch } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import { noticeData } from '../data/Data';
import TestTr from './TestTr';

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [newNoticedata, setNewNoticeData] = useState(noticeData);

  return (
    <div className='content'>
      <h1><img src="../img/notice-icon.png" alt="공지사항 이미지" /></h1>
      <div className='searchNotice'>
        <h2>공지사항 <input type="text" placeholder='검색어를 입력하세요' />
        <button><VscSearch /></button>
        </h2>
      </div>
      <br />
      <div className='notice-table'>
        <div className='page-choice'>
          <select >
            <option value="10개씩">10개씩</option>
            <option value="10개씩">15개씩</option>
            <option value="10개씩">20개씩</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성일자</th>
            </tr>
          </thead>
          <tbody>
            {newNoticedata.map((id, index)=>{
              return (
                <TestTr data={newNoticedata[index]} key={newNoticedata[index].id}></TestTr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className='page'>
        <button>넘기기</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
};

export default NoticeBoard;