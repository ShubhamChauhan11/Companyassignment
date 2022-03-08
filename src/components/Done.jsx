import React from "react";

const Done=(props)=>{
     function deleteDone(index){
          let duplicate= [...props.data];
          console.log(duplicate);
          duplicate.splice(index,1);
          console.log(duplicate);
          props.setData(duplicate);
          console.log(props.data.data);

     }
     function addtoTodo(index){
          let duplicate=[...props.data];
          duplicate[index].completed=false;
          props.setData(duplicate);
     }
     return(
          <div className="border border-success m-5 p-3 border-4" >
          <h1 className="text-center fw-bolder text-decoration-underline">Done</h1>
          <ol>
               {props.data?
               props.data.map((ele,index)=>{
                    if(ele.completed===true){
                         return (
                              <>
                               <li className="fs-2" key={props.data.id}>{ele.title}</li>
                               <button className="btn btn-primary" onClick={()=>{
                                    addtoTodo(index)
                               }}>Todo</button>
                               <button className="btn btn-danger ms-2" onClick={()=>{
                                    deleteDone(index)
                               }}>Delete</button>
                              </>
                             
                         )
                    }
                    
               }): null}
          </ol>
          
          </div>

     )
}
export default Done;