import React from "react";
import { iAssignments } from "../../Types/Assignments";
import Button from "../Button";
import style from "./Formulario.module.scss";
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component<{
    setAssignments: React.Dispatch<React.SetStateAction<iAssignments[]>>
}>{

    state = {
        assignment:'',
        time: '00:00'
    }

    addTask(event: React.FormEvent){

        event.preventDefault()
        this.props.setAssignments(assignmentsOlds => [...assignmentsOlds, {
            ...this.state,
            selected:false,
            completed:false,
            id: uuidv4(),
        }])
        this.setState({
            assignment:"",
            time: "00:00"
        })
        console.log('State', this.state)
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="assignment">Digite uma tarefa</label>
                    <input 
                    value={this.state.assignment}
                    onChange={event => this.setState({...this.state, assignment: event.target.value})}
                    type="text"
                    name="assignment"
                    id="assignment"
                    placeholder="Agende um estudo" 
                    required/>
                </div>
                
                <div className= {style.inputContainer}>
                    <label htmlFor="time">Digite o tempo</label>
                    <input 
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})} 
                    type="time" 
                    name="time" 
                    id="time" 
                    step="1" 
                    max="02:00:00"  
                    min="00:00:00"  
                    required/>
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}

export default Form