import React from 'react';


const Numbers = (props) =>{
    const handleButtonClick = (e) => {
        let newDisplayVal = e.target.value
        props.props.buttonClick(newDisplayVal)
    }
    return (
        <button className='num-button' onClick={handleButtonClick} value={props.num}>{props.num}</button>

        
    )
} 

    


export default Numbers