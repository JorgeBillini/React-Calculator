import React from 'react';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
import Ops from './components/ops';
import Numbers from './components/numbers';
import Equal from './components/equal'
import Period from './components/period'

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
    PeriodEvent = dv => {
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
        let newPreviousValue = this.state.displayVal
        console.log(newPreviousValue)
      if (this.state.operation){
          return;
      }
        this.setState({operation:opStr,waitingForNewValue:true,previousVal:newPreviousValue,displayVal:''})

    }
    arr= [9,8,7,6,5,4,3,2,1,0]

    
    // RM this
   
     numButtonClick = dvi =>{
         // DO NOT ADD ANY MORE NUMS AFTER 8 CHARS
         console.log(this.state)
         if (this.state.displayVal.length >= 8){
             return;
         }
         else if (this.state.waitingForNewValue === false) {
             let newDisplayVal;
             if (this.state.displayVal === ''){
                newDisplayVal = `${dvi}`;
             }
            newDisplayVal = this.state.displayVal + dvi;
            this.setState({displayVal:newDisplayVal})
         }
         // CREATE NEW DV if we are waiting for a new value to be inserted 
        //operation:opStr,waitingForNewValue:true,previousVal:newPreviousValue
        else if (this.state.waitingForNewValue === true && this.state.operation){
            console.log('DV is ' , this.state.displayVal)
            let newDisplayVal;
            if (this.state.displayVal === ''){
                newDisplayVal = `${dvi}`;
            }
            newDisplayVal = this.state.displayVal + dvi;
            this.setState({displayVal:newDisplayVal})

        }
        else this.setState({displayVal:dvi})
         
     
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
            <Period PeriodEvent={this.PeriodEvent} num={this.state.displayVal} />
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
