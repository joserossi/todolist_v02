import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function TaskCardV2 ({ task, isDone }) {

    const [done, setDone] = useState(isDone)

    const textClassName = done ? 'card-texto card-texto-done' : 'card-texto' 

    const handleClickDone = () => {
        setDone(!done)
    }

    return(
        <div className="card">
            <h3 className={textClassName}>{task}</h3>
            <button onClick={handleClickDone}>Done</button>
        </div>
    )   
}