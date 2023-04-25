import React from 'react';

const Option = ({options, checkans, ansdetails}) => {
  return <button key={options.id} id={options.id} className="opt" onClick={()=>checkans(options.id, options.stats, ansdetails)}>{options.text}</button>;
};

export default Option;
