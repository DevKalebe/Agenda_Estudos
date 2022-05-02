import React, { useState } from "react";
import { iAssignments } from "../../Types/Assignments";
import {Item} from "./item";
import  style  from "./Lista.module.scss";

interface Props{
    assignments: iAssignments[],
    selectedAssignment: (assignmentSelected: iAssignments) => void
}


export function List({assignments, selectedAssignment}:Props) {

    

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {assignments.map(item => (

                    <Item
                        selectedAssignments={selectedAssignment}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>   
    )
}
