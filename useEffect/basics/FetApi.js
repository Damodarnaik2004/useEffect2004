import React,{useState,useEffect} from 'react'
import UsingProps from './UsingProps';


const FetApi = () => {
   
     const [users,setUsers]=useState([]);
     const [newUsers,setNewUsers]=useState([]);
     const [loading,setLoading]=useState(true);
    const getUsers=async()=>{

        
        setLoading(false);
        const response=await fetch('https://jsonplaceholder.typicode.com/photos');
        
        setUsers(await response.json());
        const n=users.filter((element,index)=>{
            return index<10;
        })
        setNewUsers(n);


        


      
       
        
    }
    
    useEffect(()=>{
       getUsers();
    },[]);

    if(loading){
        return <div>Loading</div>
    }


  return (
    <>
      <UsingProps  newUsers={newUsers}/>
    </>
  )
}

export default FetApi

{/* <h1>Name :{element.name}</h1>
<h2>UserName :{element.username}</h2>
<h2>Email :{element.email}</h2>
<h2>Phone :{element.phone}</h2>
<h2>website :{element.website}</h2>
<br/>
<br/> */}