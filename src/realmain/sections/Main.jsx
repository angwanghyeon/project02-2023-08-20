import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NoticeBoard from '../components/NoticeBoard';
import QnABoard from '../components/QnABoard';
import Knowledge from '../components/Knowledge';
import KnowledgeWrite from '../components/KnowledgeWrite';
import Festival from '../components/Festival';
import Login from '../components/Login';
import KnowledgeDetail from '../components/KnowledgeDetail';
import NoticeBoardDetail from '../components/NoticeBoardDetail';
import { knowledgeData, noticeData, qnaData } from '../data/Data';
import QnaBoardDetail from '../components/QnaBoardDetail';
import data from '../data/festival.json';
import FestivalDetail from '../components/FestivalDetail';
const Main = () => {
    const [newNoticedata, setNewNoticeData] = useState(noticeData);
    const [newQnaData, setNewQnaData] = useState(qnaData);
    const [newKnowledgeData, setNewKnowledgeData] = useState(knowledgeData);
    const [newFestivalData, setNewFestivalData] = useState(data.data);
    return (
        <div className='app'>
            <div className='main'>메인입니당</div>
            <Routes>
                <Route path='/notice' element={<NoticeBoard></NoticeBoard>}></Route>
                <Route path='/qna' element={<QnABoard></QnABoard>}></Route>
                <Route path='/notice/detail/:id?' element={<NoticeBoardDetail data={newNoticedata}></NoticeBoardDetail>}></Route>
                <Route path='/qna/detail/:id?' element={<QnaBoardDetail data={newQnaData}></QnaBoardDetail>}></Route>
                <Route path='/info/knowledge' element={<Knowledge></Knowledge>}></Route>
                <Route path='/info/knowledge/write' element={<KnowledgeWrite></KnowledgeWrite>}></Route>
                <Route path='/info/knowledge/detail/:id?' element={<KnowledgeDetail data={newKnowledgeData}></KnowledgeDetail>}></Route>
                <Route path='/info/festival' element={<Festival></Festival>}></Route>
                <Route path='/info/festival/detail/:id?' element={<FestivalDetail data={newFestivalData}></FestivalDetail>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
};

export default Main;