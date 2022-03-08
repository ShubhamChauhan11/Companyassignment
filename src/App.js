import React, { useEffect,useState }  from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import Todo from "./components/Todo";
import Done from "./components/Done";

const App=()=>{
  const[data, setData]= useState([]);
  
  
  const[dark, setDark]= useState(false);
  
  
 

  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((response)=>{
      setData(response.data);
      
      
     
    })
    
  },[])
  
  function changetheme(){
    setDark(!dark);
  }
  const darktheme={
    backgroundColor: "black",
    color: "white"
  }
  const lighttheme={
    backgroundColor: "white",
    color: "black"
    
  }
  return(
    <>
    
    <div style= {!dark?lighttheme:darktheme}>
    <div>
       <button onClick={changetheme}>Toggle Theme</button>
     </div>
    <div className="contentdiv">
     <Todo data={data} setData={setData}  />
     <Done data={data} setData={setData} />
     </div>
    
    </div>
    </>
  )
}
export default App;