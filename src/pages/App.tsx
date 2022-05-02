import React, { useState } from 'react';
import Form from '../components/Form';
import { List } from '../components/List';
import  style  from './App.module.scss';
import { Stopwatch } from '../components/Stopwatch';
import { iAssignments } from '../Types/Assignments';


function App() {

  const [assignments, setAssignments] = useState<iAssignments[]>([])
  const [selected, setSelected] = useState<iAssignments>()

  function selectedAssignment(assignmentSelected: iAssignments){
    setSelected(assignmentSelected)
    setAssignments(assignmentsOlds => assignmentsOlds.map(assignment => ({
      ...assignment,
      selected: assignment.id === assignmentSelected.id ? true : false
    })))
  }

  // função que finaliza a tarefa 

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setAssignments(assignmentsOlds => assignmentsOlds.map(assignment => {

        if (assignment.id === selected.id) {
          return{...assignment, selected: false, completed: true}
        }
        return assignment
      }))
    }
  }

  return(
    <div className={style.AppStyle}>
      <Form setAssignments = {setAssignments}/>
      <List assignments={assignments}
      selectedAssignment={selectedAssignment}
      />
      <Stopwatch
        selected={selected}
        finishTask={finishTask}
      />
    </div>
    
  );
}

export default App;