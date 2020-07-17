import React, {useState, useReducer} from 'react'

export default function NewSmurfForm(){
    const {input, setInput} = useState('')

    const handleChanges = e =>{
        setInput(e.target.value)
      };

    return (
        <>
        <h2>Register New Smurf</h2>
        <form>
            <label for='name'>Name</label>
            <input
            type='text'
            name='name'
            value={input}
            onChange={handleChanges}
            />
            <label for='age'>Age</label>
            <input
            type='text'
            name='age'
            value={input}
            onChange={handleChanges}
            />
            <label for='height'>Height</label>
            <input
            type='text'
            name='height'
            value={input}
            onChange={handleChanges}
            />
            <button>Register</button>
        </form>
        </>
    )
}