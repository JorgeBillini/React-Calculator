import React from 'react';

const jumbo = {
    padding: '100px',
    backgroundColor: '#52536d',
    fontSize: '100px',
    textAlign: 'right',
    color: 'white'
}

class Display extends React.Component {
    render(){
        return ( 
            <h1 style={jumbo}>{ this.props.displayVal}</h1>
        );
    } 
}

export default Display;

