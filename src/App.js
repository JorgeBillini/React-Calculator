import React from 'react';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
import Ops from './components/ops';
import Numbers from './components/numbers';
import Equal from './components/equal'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : "",
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
    resolveOperation = object => {
        console.log(this.state)
        let newPreviousValue = this.state.displayVal
        const result = object;
        this.setState({
            displayVal: result, 
            operation: null, 
            waitingForNewValue: false})
    }
    addOperation = opStr => {
        console.log(this.state ,'current state in addops')
        let newPreviousValue = this.state.displayVal
        console.log(newPreviousValue)
      if (this.state.operation){
          return;
      }
        this.setState({operation:opStr,waitingForNewValue:true,previousVal:newPreviousValue})
        console.log(this.state)

    }
    arr= [9,8,7,6,5,4,3,2,1]

    
    // RM this
   
     numButtonClick = dvi =>{
         const newDv = dvi;
        this.setState({displayVal:dvi})
         
     
    }
    render(){
        return (
            <>
             <Display displayVal={this.state.displayVal} waitingForNewValue={this.waitingForNewValue}/>
             <div className='container'>
             <div className='row-1 '>
             <ExtraOPs ACevent={this.ACevent} Percevent={this.Percevent} PlusMinusEvent={this.PlusMinusEvent} displayVal= {this.state.displayVal} />
             </div>
             <div className="container-num">
            {
                this.arr.map((e,i)=>{
                    return <Numbers props = {{num:e,numButtonClick:this.numButtonClick,state:this.state}} num={e} />
                })
            }
         </div>
            <div className='row-2'>
           <Ops addOperation={this.addOperation} state={this.state}/>

            </div>
            <Equal props={{state:this.state,resolveOperation:this.resolveOperation}} />
            </div>
            
            </>
        );
    }
    
}

export default App;
