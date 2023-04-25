import React from 'react';

const Question = ({questionq}) => {
  return <div className='que'>
    <h3 key={questionq.id}>{questionq.ques}</h3>
  </div>;
};



export default Question;
