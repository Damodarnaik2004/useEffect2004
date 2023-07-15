import React,{useState,useEffect} from 'react'

const Chats = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Chats (${count})`
    });
  return (
    <div>
      <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Chats;
