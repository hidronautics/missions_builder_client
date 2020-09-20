import React from 'react';
import { useState } from 'react';
import { Draggable,Droppable } from 'react-beautiful-dnd';


const Workfield = (props) => {

 const [items, addItem] = useState();

 const onDragEnd = () => {

 }

 return(
     <div className="workfield">
         <Droppable droppableId="droppable_field">
            {(provided,snapshot) => (
                <div className="workfield_wrapper"  ref={provided.innerRef}>
                {props.currentItem.map((item, index) => (
                     <Draggable key={item.id} draggableId={'current-' + index} index={index} >
                     {(provided, snapshot) => (
                       <div className="command_item" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
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


export default Workfield;