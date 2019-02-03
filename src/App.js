import React from 'react';
import Operation from '../helpers/operations'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : 0,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }
    render(){
        return (
            <h1>Hello mofos</h1>
        )
    }
    
}

export default App;