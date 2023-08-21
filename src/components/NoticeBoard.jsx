import React from 'react';
import style from '../css/NoticeBoard.css'
import { VscSearch } from 'react-icons/vsc';


const NoticeBoard = () => {
  return (
    <div className='content'>
      <h1 style={{textAlign:'left'}}>공지사항</h1>
      <div className='searchNotice'>
        <h2>공지사항 <input type="text" placeholder='검색어를 입력하세요' />
        <button><VscSearch /></button></h2>
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
            <tr>
              <td>1</td>
              <td>관광지</td>
              <td>추가된 관광지 목록</td>
              <td>2023-08-21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>축제 및 행사</td>
              <td>추가된 행사 목록</td>
              <td>2023-08-21</td>
            </tr>
            <tr>
              <td>3</td>
              <td>음식</td>
              <td>제거된 음식점 목록</td>
              <td>2023-08-21</td>
            </tr>
            <tr>
              <td>4</td>
              <td>숙박</td>
              <td>추가된 게스트하우스 목록</td>
              <td>2023-08-21</td>
            </tr>
            <tr>
              <td>5</td>
              <td>서버 업데이트</td>
              <td>전체 서버 업데이트</td>
              <td>2023-08-14</td>
            </tr>
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