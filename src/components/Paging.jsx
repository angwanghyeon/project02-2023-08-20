import React from 'react';

const Paging = ({page, setPage, lastPage, name}) => {

  const onSetPage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.text));
  }

  const pagingNumMake = (pages) => {
    let arr = [];
    // todo!! : 선택한 페이지 번호의 텍스트와 현재 페이지가 일치하면 bold가 주어진 스타일 주기
    for (let i = pages < 6 ? 1 : 6; pages < 6 ? i <= 5 : i <= lastPage.current; i++) {
      arr.push(<a className='pagingNumBtn' href={'/'+name+'/'+i} onClick={onSetPage}>{i}</a>)
    } return arr;
  }

  return (
    <div className='list-contentList-paging'>
      <button
        disabled={page === 1 && true}
        onClick={() => { setPage(1) }}>첫페이지
      </button>
      <button
        disabled={page === 1 && true}
        onClick={() => { setPage(page - 1) }}>이전 페이지
      </button>
      {pagingNumMake(page)}
      <button
        disabled={page === lastPage.current && true}
        onClick={() => { setPage(page + 1) }}>다음 페이지
      </button>
      <button
        disabled={page === lastPage.current && true}
        onClick={() => { setPage(lastPage.current) }}>마지막페이지
      </button>
    </div>
  )
}

export default Paging;