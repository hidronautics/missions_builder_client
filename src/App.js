import React, { useEffect, useState } from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Workfield from './components/Workfield';



const App = (props) => {

const tasks = ['ВПЕРЕД','НАЗАД', 'ПОГРУЖЕНИЕ'];

const [currentItem, setItem] = useState([]);

const onDragEnd = (result) => {
  console.log('it is working!')
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

useEffect(() => {
}, [currentItem])

const getVal = (e) => {
  let newItem = e.target.textContent;
  setItem([...currentItem, newItem]);
  console.log(currentItem);
}




  return (
    <div className="App">
        <Navbar />
          <div className="wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <Leftbar getVal={getVal} tasks={tasks} />
                <Workfield currentItem={currentItem} />
            </DragDropContext>
            </div>
            
          
    </div>
  );
}

export default App;
