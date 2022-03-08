import React,{useCallback, useState} from "react";

const Todo=(props)=>{
     const[input, setInput]= useState("");
     

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
     function makeinput(e){
          console.log(e.target.value)
          setInput(e.target.value);
          console.log(input);
     }
    
         
             
     function addnewtodo(e){
          
          e.preventDefault();
         
           props.setData([...props.data, {
               id: Math.random(),
               title: input,
               completed: false

           }])
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
                              <div key={index}>
                              <li className="fs-2" key={props.data.id}>{ele.title}</li>
                              <button className="btn btn-success" onClick={()=>{
                                   addtodone(index)
                              }}>Done</button>
                              <button  className="btn btn-danger ms-2" onClick={()=>{
                                   deleteTodo(index)
                              }}>Delete</button>
                              </div>
                              
                         )
                    }
                    
               }): null}
          </ol>
          
          <div className="mt-5 p-3 border border-warning border-4">
               <form onSubmit={addnewtodo}>
               <input  type="text" placeholder="type todo" value={input} onChange={(e)=>{
                    makeinput(e);

               }}/>
               <button type="submit" disabled={!input} className="btn btn-success mt-1.5 ms-3" >Add</button>
               </form>
          </div>
         
          </div>

     )
}
export default Todo;