import React,{useState,useEffect} from 'react'


const FetchingApi = () => {
   
     const [users,setUsers]=useState([]);
     const [newUsers,setNewUsers]=useState([]);
    const getUsers=async()=>{
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
  return (
    <>
      <center>
        {
            newUsers.map((element)=>{
                return(
                    <div key={element.id}>
                    <h1>Titel :{element.title}</h1>
                    <img src={element.thumbnailUrl} height={100} width={100}/>
                    <div>
                        hello world
                    </div>
                    </div>
                    
                )
            })
        }
      </center>
    </>
  )
}

export default FetchingApi

{/* <h1>Name :{element.name}</h1>
<h2>UserName :{element.username}</h2>
<h2>Email :{element.email}</h2>
<h2>Phone :{element.phone}</h2>
<h2>website :{element.website}</h2>
<br/>
<br/> */}