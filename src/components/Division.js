import React from 'react';
import Question from './Question';
import Options from './Options';

const Division = ({ questions, checkans }) => {
    return (
        <>
            {questions.map(
                (question) =>
                (
                    <div key={question.id} className="division" id={question.id}>
                        <Question  questionq={question} />
                        <Options key={question.id} options={question.options} ansdetails={question.id} checkans={checkans}/>
                    </div>
                )
            )
            }
            
        </>
    );
};

export default Division;
