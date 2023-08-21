import React from 'react';
import style from '../css/Festival.css'
import { Link } from 'react-router-dom';

const Festival = () => {
  return (
    <div className='festival-content'>
      <div className='festival-title'>
        <h1>축제 및 행사</h1>
        <p>축제나 행사는 보통 한해별로 데이터를 제공하므로 월별로 구분한다.</p>
      </div>
      <div className='festival-category'>
        <label>1월</label>
        <label>2월</label>
        <label>3월</label>
        <label>4월</label>
        <label>5월</label>
        <label>6월</label>
        <label>7월</label>
        <label>8월</label>
        <label>9월</label>
        <label>10월</label>
        <label>11월</label>
        <label>12월</label>
      </div>
      <div className='festival-list'>
        <div className='on-festival'>
          <h3>진행 중인 축제 및 행사</h3>
          <ul>
          <li className='festival-item'>
              <Link><a href="/festival/1">축제 1번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/2">행사 1번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/1">축제 2번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/2">행사 2번</a></Link>
            </li>
          </ul>
        </div>
        <div className='off-festival'>
          <h3>종료된 축제 및 행사</h3>
          <ul>
            <li className='festival-item'>
              <Link><a href="/festival/1">축제 1번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/2">행사 1번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/1">축제 2번</a></Link>
            </li>
            <li className='festival-item'>
              <Link><a href="/festival/2">행사 2번</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Festival;