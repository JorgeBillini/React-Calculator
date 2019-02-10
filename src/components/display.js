import React from 'react';

class Display extends React.Component {
    render(){
        return ( 
            <h1 className='display beige'>{this.props.displayVal === '' ? '0': this.props.displayVal}</h1>
        );
    } 
}

export default Display;

