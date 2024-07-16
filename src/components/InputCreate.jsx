import { useState, useRef } from 'react';

const InputCreate = ({ data }) => {
    const [inputData, setInputData] = useState("");
    const inputRef = useRef(null);
    const urlCreateAPI = "http://localhost:3000/create";

    const createTask =  () => {
        const newTask = {
            title: inputData
        }
        
        fetch(urlCreateAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask), 
        })

    }

    return (
        <>
            <h2>Lista de datos</h2>
            <input id='name' type='text' value={inputData} placeholder='Algo' className='Algo' onChange={() => setInputData(inputRef.current.value)} ref={inputRef} />
            <button onClick={() => createTask()}>Crear tarea</button>
        </>
    )
};

export default InputCreate;
