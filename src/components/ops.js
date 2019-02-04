import React from 'react';

/* <p style={button}>*</p> */
const pStyle = {
    fontSize: '200px',
    textAlign: 'center',
    color: '#52536d'

};

const dStyle = {
    margin: '20px 30px',
    width: '300px',
    height: '250px',
    // borderRadius: '30px',
    // border: '10px solid #52536d',
    borderLeft: '10px solid #52536d',
    borderBottom: '10px solid #52536d',

}

class Ops extends React.Component {

    handleMultiplyClick = () => {
        this.props.addOperation('*');
    }

    render(){
        return (
            <div className='' style={dStyle}>
                <p onClick={this.handleMultiplyClick} style={pStyle}>*</p>
            </div>
        );
    } 
}

export default Ops;