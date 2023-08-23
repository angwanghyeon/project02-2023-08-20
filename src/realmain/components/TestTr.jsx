import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestTr = (props) => {
  const navigate = useNavigate();
  const {no, category, title, content, createDate} = props.data;
  
  return (
    <tr onClick={()=>navigate('/notice/detail/'+no)}>
      <td>{no}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>{createDate}</td>
    </tr>
  );
};

export default TestTr;