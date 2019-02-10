import React from 'react';

const Period = props =>{
    let newVal = props.num
    if (newVal === ''){
        newVal = '0'
    }
    const padNum = () =>{
        const newNum = newVal +'.';
        props.PeriodEvent(newNum)

    }
    return(
     <button className='button' value={'.'} onClick={padNum}  > . </button>
    )
}

export default Period;