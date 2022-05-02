import { iAssignments } from '../../../Types/Assignments'
import style from '../Lista.module.scss'

interface Props extends iAssignments{
    selectedAssignments: (assignmentSelected: iAssignments) => void
}

export function Item({assignment, time, selected, completed, id, selectedAssignments}: Props) {
    
   return(
    <li className={`${style.item} ${selected ? style.itemSelecionado : ""}${completed?style.itemCompletado : ""}`} 
    onClick={() => selectedAssignments({
        assignment,
        time,
        selected,
        completed,
        id
    })}>
        <h3>{assignment}</h3>
        <span>{time}</span>
        {completed && <span aria-label='Concluida' className={style.concluido} ></span>}
    </li>
   )
}