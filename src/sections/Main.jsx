import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NoticeBoard from '../components/NoticeBoard';
import QnABoard from '../components/QnABoard';
import Knowledge from '../components/Knowledge';
import KnowledgeWrite from '../components/KnowledgeWrite';
import Festival from '../components/Festival';
import Login from '../components/Login';

const Main = () => {
    return (
        //   <Routes>
        //     <Route path='/info/notice' element={<MainBoardList></MainBoardList>}>
        //     </Route>
        //  </Routes>
        <div className='app'>
            <Routes>
                <Route path='/notice' element={<NoticeBoard></NoticeBoard>}></Route>
                <Route path='/notice/qna' element={<QnABoard></QnABoard>}></Route>
                <Route path='/info/knowledge' element={<Knowledge></Knowledge>}></Route>
                <Route path='/info/knowledge/write' element={<KnowledgeWrite></KnowledgeWrite>}></Route>
                <Route path='/info/festival' element={<Festival></Festival>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
};

export default Main;