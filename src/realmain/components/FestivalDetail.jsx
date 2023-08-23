import React from 'react';
import { useParams } from 'react-router-dom';

const FestivalDetail = ({data}) => {
  const params = useParams();
  if(data !== null){
  const startDate = data[params.시작일];
  const endDate = data[params.종료일];
  console.log(startDate);
  console.log(endDate);
  }
  return (
    <div>
      축제 소개 페이지임
    </div>
  );
};

export default FestivalDetail;