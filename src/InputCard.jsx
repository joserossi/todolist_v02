import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function InputCard({ onSave }) {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = (event) => {
        setInputValue(event.target.value)
    } 

    const handleClickAdd = () => {
        saveToLocalStorge()
    }

    const saveToLocalStorge = () => {

        const existingData = localStorage.getItem('jsonData')
        let data = existingData ? JSON.parse(existingData) : []
        data.push({ task: inputValue, isDone: false })

        localStorage.setItem('jsonData', JSON.stringify(data))

        // Notifico al padre que agregué una tarea al local storage
        onSave()
    }
    
    return (
        <div className="input-card">
            <input 
                type="text"
                value={inputValue}
                onChange={handleChangeInput} />
            <button onClick={handleClickAdd}>Add</button>
        </div>
    )
}