import React, {useState} from 'react'
import { connect } from "react-redux"; 

import {postSmurf} from '../store/actions/indexAction'


function NewSmurfForm(props){
    const intitialValues = {name: '', age: '', height: ''}
    const [newSmurf, setNewSmurf] = useState(intitialValues)

    const handleChanges = evt =>{
        const{name, value} = evt.target;
        setNewSmurf({
            ...newSmurf,
            [name]: value,
          })
      };


    const submit = e =>{
        e.preventDefault()
        props.postSmurf(newSmurf)
        setNewSmurf(intitialValues)

    }
    return (
        <>
        <h2>Register New Smurf</h2>
        <form onSubmit={submit}>
            <label htmlFor='name'>Name</label>
            <input
            type='text'
            name='name'
            value={newSmurf.name}
            onChange={handleChanges}
            />
            <label htmlFor='age'>Age</label>
            <input
            type='text'
            name='age'
            value={newSmurf.age}
            onChange={handleChanges}
            />
            <label htmlFor='height'>Height</label>
            <input
            type='text'
            name='height'
            value={newSmurf.height}
            onChange={handleChanges}
            />
            <button>Register</button>
        </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
      village: state.village,
    }}
export default connect(mapStateToProps,{postSmurf})(NewSmurfForm)