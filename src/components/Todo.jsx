import React,{useState} from "react";

const Todo=(props)=>{
     const[input, setInput]= useState("");
     const[newitem, addnew]= useState({});
     function deleteTodo(index){
          let duplicate= [...props.data];
          console.log(duplicate);
          duplicate.splice(index,1);
          console.log(duplicate);
          props.setData(duplicate);
         
          console.log(props.data);

     }
     function addtodone(index){
          let newdata =[...props.data];
         
          newdata[index].completed= true;
          
          props.setData(newdata);

     }
     function addnewtodo(){
          addnew({
               id: Math.random(),
               title: input,
               completed: false

          })
          props.setData([...props.data, newitem])
          setInput("");
     }
     
     
     
     return(
          <div className="border border-primary m-5 p-3 border-4">
          <h1 className="text-center fw-bolder text-decoration-underline">Todo</h1>
          <ol>
               {props.data?
               props.data.map((ele, index)=>{
                    if(ele.completed===false){
                         return (
                              <>
                              <li className="fs-2" key={props.data.id}>{ele.title}</li>
                              <button className="btn btn-success" onClick={()=>{
                                   addtodone(index)
                              }}>Done</button>
                              <button className="btn btn-danger ms-2" onClick={()=>{
                                   deleteTodo(index)
                              }}>Delete</button>
                              </>
                              
                         )
                    }
                    
               }): null}
          </ol>
          <div className="mt-5">
               <input type="text" placeholder="type here" value={input} onChange={(e)=>{
                    setInput(e.target.value)
               }}/>
               <button className="btn btn-success mt-3" onClick={addnewtodo}>Add Todo</button>
          </div>
         
          </div>

     )
}
export default Todo;