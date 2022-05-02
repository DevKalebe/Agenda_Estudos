import style from "./styleWatch.module.scss";

interface Props{
    time: number
}

export function Watch({time}:Props){

    const minutes = Math.floor(time/60)
    const seconds = time % 60
    const [minuteTen, minuteUnity] = String(minutes).padStart(2,"0")
    const [secondTen, secondUnity] = String(seconds).padStart(2,"0")

    return(
        <>
        <span className={style.watchNumber}>{minuteTen}</span>
        <span className={style.watchNumber}>{minuteUnity}</span>
        <span className={style.watchDivision}>:</span>
        <span className={style.watchNumber}>{secondTen}</span>
        <span className={style.watchNumber}>{secondUnity}</span>
        </>
    )
}