import React from 'react';
import Command from './Workfield';
import {useState, useEffect} from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';


const Leftbar = (props) => {

  // const [task,setTasks] = useState(props.tasks);

 
  const onDragEnd = (result) => {
    console.log('it is ok!');
    // if (!result.destination) {
    //   return;
    // }

  
    // const startIndex = result.source.index
    // const endIndex = result.destination.index

    // const tasksNew = Array.from(task);
    // const [removed] = tasksNew.splice(startIndex, 1);
    // tasksNew.splice(endIndex, 0, removed);
  
    // setTasks(task);
  };


 
    return(
      <div className="leftbar">
        <Droppable droppableId="droppable">
            {(provided, snapshot)=> (
              <div className="lefbar_wrapper" ref={provided.innerRef}>
                  {props.tasks.map((item, index) => (
                    <Draggable key={item.id} draggableId={'draggable-' + index} index={index} >
                        {(provided, snapshot) => (
                          <div className="command_item" onClick={props.getVal}  ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                              <span>{item}</span>     
                          </div>
                        
                        )}
                    </Draggable>
                  ))}
              </div>
            )}
        </Droppable>
    </div>
    )
}


export default Leftbar;