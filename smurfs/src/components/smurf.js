import React from 'react'

export default function Smurf(props){
    
    return(
        <div className='smurf'>
            <h2>{props.info.name}</h2>
            <p className='age'>{props.info.age}</p>
            <p className='height'>{props.info.height}</p>
        </div>
    )
}