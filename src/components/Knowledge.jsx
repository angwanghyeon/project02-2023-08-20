import React, { useState } from 'react';
import style from '../css/Knowledge.css'
import { Link, useNavigate } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { knowledgeData } from '../data/Data';


const Trkn = (props) =>{
const navigate = useNavigate();
const {no, category, title, content, persnal, createDate} = props.data;

return (
  <tr onClick={()=>navigate('/info/knowledge/detail/'+no)}>
    <td>{no}</td>
    <td>{category}</td>
    <td>{title}</td>
    <td>{persnal}</td>
    <td>{createDate}</td>
  </tr>
);
}

const Knowledge = () => {
  const navigate = useNavigate();
  const [newKnowledgeData, setNewKnowledgeData] = useState(knowledgeData);
  return (
    <div className='content'>
      <div className='knowledge-title'>
        <h1>Jhat JPT 지식in</h1>
        <p>제주도 여행에 관해서라면 관광지, 숙박, 음식, 축제, 교통 정보 등등 지식in을 이용해주세요</p>
        <p>전문가를 비롯한 제주도민, 제주도를 잘 아는 사람이라면 누구든지 답변 받을 수 있습니다.</p>
        <button onClick={()=>navigate('/info/knowledge/write')}>질문하기</button>
      </div>
      <div className='knowledge-content'>
        <div className='most-qna1' onClick={()=>navigate('/info/knowledge/detail/1')}>
            <img src="../img/qna-icon.png" alt="이미지1" style={{width:'120px', height:'120px'}}/>
            <p>가장 많이 본 qna1</p>
            <p>가장 많이 본 qna1의 내용 간략히</p> 
        </div>
        <div className='most-qna2' onClick={()=>navigate('/info/knowledge/detail/2')}>
          <img src="../img/qna-icon.png" alt="이미지2" style={{width:'120px', height:'120px'}} />
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
          <button><VscSearch /></button>
          </h2>
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
              {newKnowledgeData.map((id, index)=>{
                return (
                  <Trkn data={newKnowledgeData[index]} key={newKnowledgeData[index].id}></Trkn>
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
    </div>
  );
};

export default Knowledge;