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
            displayVal : 0,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }
    
    ACevent = dv =>{
    this.setState({displayVal:dv});
    }
    Percevent = dv =>{
        this.setState({displayVal:dv})
    }
    PlusMinusEvent = dv => {
        this.setState({displayVal:dv})
    }
    addOperation = operator =>{
        this.setState({operation:operator})
    }
     arr= [9,8,7,6,5,4,3,2,1,'.']
     buttonClick = dv =>{
         let newPreviousVal = this.state.displayVal
         if (this.state.displayVal > 0) {
             this.setState({previousVal:newPreviousVal,displayVal:dv})
         }
        else this.setState({displayVal:dv})
         console.log(this.state)
    }
    render(){
        console.log(this.state)
        return (
            <>
             <Display displayVal={this.state.displayVal}/>
             <div className='container'>
             <div className='row-1 '>
             <ExtraOPs ACevent={this.ACevent} Percevent={this.Percevent} PlusMinusEvent={this.PlusMinusEvent} displayVal= {this.state.displayVal} />
             </div>
             <div className="container-num">
            {
                this.arr.map((e,i)=>{
                    return <Numbers props = {{num:e,buttonClick:this.buttonClick}} num={e} />
                })
            }
         </div>
            <div className='row-2'>
            <Ops addOperation={this.addOperation}></Ops>
            </div>
            </div>
            </>
        );
    }
    
}

export default App;