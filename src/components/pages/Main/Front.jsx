import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Front() {
// const [count, setCount]=useState(4)
const [state , setState] = useState({
  count:"0",
  theme:""
})
const count = state.count;
const theme = state.theme;

const decrementCount = ()=>{
  setState(prevState=>{
   return {count: prevState.count-1}
  })
}
const incrementCount = ()=>{
  setState(prevState=>{
   return {count: prevState.count+1}
  })
}
// function decrementCount(){
//   setCount(prevCount=>prevCount-1)
// }
// function incrementCount(){
//   setCount(prevCount=>prevCount+1)
// }
  return (
    <>
    <div className='App'>

      <Link to='/hooks'> use-Effect Hooks</Link>
      <hr></hr>
    <div>Front for Use State</div>
    <div>
      <button onClick={decrementCount}>-</button>
      {/* <button>-</button> */}
      {/* <span>0</span> */}
      {/* <button>+</button> */} 
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    </div>
    </>
  )
}

