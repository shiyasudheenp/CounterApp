import React,{useState} from 'react'
import './App.css'
import User from './User';

function App() {
  const[count,setcount]=useState(0);
 const handleadd=()=>{
    setcount(count+1);

  }
  // const handless=()=>{
  //   setcount(count-1);

  // }
  const handlestart=()=>{
    setcount(0);
  }
  
  


  return (
    <div>
      <h1>Welcome To CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={handleadd}>Add</button>
      <button onClick={()=>setcount(count-1)}>Less</button>
      <button onClick={handlestart}>Restart</button>
      <User/>
    </div>
  )
}

export default App