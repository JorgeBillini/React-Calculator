import React from 'react';
// import Operation from './helpers/operations';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
// import Numbers from './components/numbers';
import Ops from './components/ops';
import Numbers from './components/numbers'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : 100,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }
    ACevent = dv =>{
    const {displayVal} = this.state;
    this.setState({displayVal:dv});
    }
    Percevent = dv =>{
        const {displayVal} = this.state;
        this.setState({displayVal:dv})
    }
    PlusMinusEvent = dv => {
        const {displayVal} = this.state;
        this.setState({displayVal:dv})
    }
     arr= [9,8,7,6,5,4,3,2,1]

    render(){
        console.log(this.state)
        return (
            <>
             <Display displayVal={this.state.displayVal}/>
             <ExtraOPs ACevent={this.ACevent} Percevent={this.Percevent} PlusMinusEvent={this.PlusMinusEvent} displayVal= {this.state.displayVal} />
             <Ops addOperation={this.addOperation}/>
             {
                this.arr.map((e,i)=>{
                    return(
                     <div className ='row'>
                    <Numbers num={e}></Numbers>
                    </div>
                    )
                })
            }
            
            
           
            
            </>
        );
    }
    
}

export default App;