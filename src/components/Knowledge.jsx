import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import style from '../css/Knowledge.css'
import { useNavigate } from 'react-router-dom';


const Knowledge = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <div className='knowledge-title'>
        <h1>Jhat JPT 지식in</h1>
        <p>제주도 여행에 관해서라면 관광지, 숙박, 음식, 축제, 교통 정보 등등 지식in을 이용해주세요</p>
        <p>전문가를 비롯한 제주도민, 제주도를 잘 아는 사람이라면 누구든지 답변 받을 수 있습니다.</p>
        <button onClick={()=>navigate('/info/knowledge/write')}>질문하기</button>
      </div>
      <div className='knowledge-content'>
        <div className='most-qna1'>
          <img src="" alt="이미지1" />
          <p>가장 많이 본 qna1</p>
          <p>가장 많이 본 qna1의 내용 간략히</p>
        </div>
        <div className='most-qna2'>
          <img src="" alt="이미지2" />
          <p>가장 많이 본 qna2</p>
          <p>가장 많이 본 qna2의 내용 간략히</p>
        </div>
        <div className='knowledge-category'>
          <button>전체</button>
          <button>관광지</button>
          <button>음식</button>
          <button>축제</button>
          <button>기타</button>
        </div>
        <div className='searchKnowledge'>
          <h2>지식in <input type="text" placeholder='검색어를 입력하세요' />
          <button><VscSearch /></button></h2>
        </div>
        <div className='knowledge-table'>
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
                <th>아이디</th>
                <th>작성일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>음식</td>
                <td>고기국수 맛집은?</td>
                <td>고국잘알</td>
                <td>2023-08-19</td>
              </tr>
              <tr>
                <td>2</td>
                <td>관광지</td>
                <td>우도를 즐기는 방법</td>
                <td>제주도민12</td>
                <td>2023-08-19</td>
              </tr>
              <tr>
                <td>3</td>
                <td>축제</td>
                <td>이번달의 축제에 대해서...</td>
                <td>고국잘알</td>
                <td>2023-08-18</td>
              </tr>
              <tr>
                <td>4</td>
                <td>음식</td>
                <td>흑돼지를 맛집은?</td>
                <td>제주도의 육식맨</td>
                <td>2023-08-16</td>
              </tr>
              <tr>
                <td>5</td>
                <td>기타</td>
                <td>전기차 기름이 떨어졌어요</td>
                <td>25살 귀요미</td>
                <td>2023-08-15</td>
              </tr>
              <tr>
                <td>6</td>
                <td>음식</td>
                <td>고기국수 맛집은?</td>
                <td>고국잘알</td>
                <td>2023-08-19</td>
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
    </div>
  );
};

export default Knowledge;