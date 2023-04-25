import React from 'react';
import Option from './Option';

const Options = ({options, checkans, ansdetails}) => {
  return <>  {options.map(
            (option) =>
                (
                    <Option key={option.id} options={option} checkans={checkans} ansdetails={ansdetails}/> 
                )
            )
        }</>

};

export default Options;

