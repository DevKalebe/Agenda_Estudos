import Button from "../Button";
import { Watch } from "./Watch";
import  style  from './styleStopwatch.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { iAssignments } from "../../Types/Assignments";
import { useEffect, useState } from "react";

interface Props{
    selected: iAssignments | undefined
    finishTask: () => void
}

export function Stopwatch({selected, finishTask} : Props) {
    
    const [time, setTime] = useState<number>(0)

    useEffect(()=>{
        setTime(timeToSeconds(String(selected?.time || 0)))
    }, [selected])

    function regressive(counter:number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1)
                return regressive(counter - 1)
            }
            finishTask();
        }, 1000)
    }

    return(
        <div className={style.stopwatch}>
            <p className={style.title_stopwatch}>Escolha uma tarefa e inicie o cronometro</p>
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Iniciar!
            </Button>
        </div>
    )
}