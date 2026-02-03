import React,{useState} from 'react'


function User() {
    const[num,setnum]=useState("")
    const header=()=>{
        setnum((prev)=>prev=="shiyas"?"":"shiyas")
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={header}>Onclick</button>
        

``

    </div>
  )
}

export default User