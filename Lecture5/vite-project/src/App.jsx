import { useEffect, useState } from "react";
export default function App() {

  const [users, setUsers] = useState([]);
  const [count,setCount] = useState(30);

  useEffect(()=>{
    async function githubuserdata() {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUsers(data);
    console.log("Hello");
  }

  githubuserdata();


  },[count])

  

  return (
    <>
      <h1>Github Users</h1>
       <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" , gap:"10px"}}>
        {
          users.map(user => (
            <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />
          ))
        }   
      </div>

    </>


  );


};

