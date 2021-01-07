import React, { useState } from "react";
import "./styles.css";

var amount,billamount,cashamount;
var notearray=["2000","500","100","20","10","5","1"]
var notelistarray=[]

export default function App() {
const[state,setState]=useState("")
const[output,setOutput]=useState("")
const[hideNextBtn,setHideNextBtn]=useState("inline")

function billHandler(){
  billamount=event.target.value
}
function cashHandler(){
cashamount=event.target.value
}

  function nextClickhandler(){
    
    if(billamount>0){
      setHideNextBtn("none")
var newState=<div>
<h3>Cash Given: <i className="fas fa-money-bill-wave"></i></h3>
<input onChange={cashHandler} type="number" className="cash" /><br/>
<button onClick={checkHandler}><span>Check</span></button>
 </div>
 setState(newState)
  }else{
    var newState="Please enter valid bill amount."
    setState(newState)
  }}

  function checkHandler(){
    notelistarray=["Nos of notes"]
    if(cashamount<0||!Number.isInteger(Number(cashamount))||cashamount==""||billamount<0||billamount==0){
var newoutput="Please Enter valid input"
setOutput(newoutput)
    }
    else{
    amount=cashamount- Math.floor(billamount)
    if(amount==0){
      var newoutput="No change needs to be returned."
// setOutput(newoutput)
    }
else if(amount>0){
    
    for(var i=0;i<notearray.length;i++){

      var quotient=Math.floor(amount/(Number(notearray[i])))
      notelistarray[i]=quotient
      // notelistarray.push(quotient)
      amount=amount%(Number(notearray[i]))
    
    }
var newoutput=<div className="finalOutputDiv">
<h3>Return change:</h3>
<table className="note">
<tr><th>Notes</th></tr>
  {notearray.map(function(note){
    return <tr><td className="notelist" >{note}</td></tr>
  })}
</table>

<table className="changelist">
<tr><th>Nos of Notes</th></tr>
{notelistarray.map(function(nos){
return <tr><td className="changelistitem" >{nos}</td></tr>
})}
  
</table>

</div>

// setOutput(newoutput)
  }
  else{
    var newoutput=`Please collect ${Math.floor(billamount)-cashamount}$ more from customer`
  // setOutput(newoutput)
}}
setOutput(newoutput)
}
  

  return (
    <div className="App">
      <h1 >Cash Manager </h1>
      <p>Enter bill amount and cash given by customer and know minimum number of notes to return</p>

     <h3>Bill Amount: <i className="fas fa-file-invoice-dollar"></i></h3>
     <input onChange={billHandler} type="number" className="bill" min="1" /><br/>
      <button onClick={nextClickhandler} style={{display:hideNextBtn}} ><span>Next</span></button>
     <div className="cashdiv">{state}</div>
     <div  className="outputdiv">{output}</div>

    </div>
  );
}
