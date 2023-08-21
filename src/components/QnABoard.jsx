import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import style from '../css/QnABoard.css';

const QnABoard = () => {
  return (
    <div className='content'>
      <h1 style={{textAlign:'left'}}>Q & A</h1>
      <div className='QnA'>
        <h2>Q & A <input type="text" placeholder='검색어를 입력하세요' />
        <button><VscSearch /></button></h2>
      </div>
      <div className='qna-table'>
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
                <th>Q</th>
                <th>구분</th>
                <th>제목</th>
                <th>작성일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q</td>
                <td>음식</td>
                <td>신라호텔 빵 맛있나요?</td>
                <td>2023-08-19</td>
              </tr>
              <tr>
                <td>Q</td>
                <td>관광지</td>
                <td>신라호텔 빵 맛있나요?</td>
                <td>2023-08-20</td>
              </tr>
              <tr>
                <td>Q</td>
                <td>숙박</td>
                <td>신라호텔 빵 맛있나요?</td>
                <td>2023-08-21</td>
              </tr>
              <tr>
                <td>Q</td>
                <td>기타</td>
                <td>신라호텔 빵 맛있나요?</td>
                <td>2023-08-22</td>
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

export default QnABoard;