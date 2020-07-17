import React from 'react'
import Smurf from './smurf'

export default function ListSmurf(props)
{return(
        <div className='ListSmurf'>
            {props.village.map((item)=>( 
              <Smurf info={item}/>
            ))}
        </div>
    )
}