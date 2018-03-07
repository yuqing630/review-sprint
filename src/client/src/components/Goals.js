import React from 'react';


const Goals = (props) => {
  console.log(props)
  return(
    <div>
    {props.description}
    <button onClick={()=> {props.onClick(props.id)}} >Completed</button>


    </div>
  )
}

export default Goals;
