import React from 'react';
import Command from './Command';
import {useState, useEffect} from 'react';





const Leftbar = (props) => {

  
    const drop = (e) =>{
        e.preventDefault();
        const command_id = e.dataTransfer.getData('command_id');
    
        const command = document.getElementById(command_id);
        command.style.display = 'block';
        
        e.target.appendChild(command);
      }
    
      const dragOver = (e) => {
        e.preventDefault();
      }
    
    return(
        <div className="leftbar"  id={props.id} onDrop={drop} onDragOver={dragOver}>
            <Command id="command-1" className="command_item" draggable="true"><span>ВПЕРЕД</span></Command>
            <Command id="command-2" className="command_item" draggable="true"><span>НАЗАД</span></Command>
            <Command id="command-3" className="command_item" draggable="true"><span>ПОГРУЖЕНИЕ</span></Command>
               {props.children}
        </div>
    )
}


export default Leftbar;