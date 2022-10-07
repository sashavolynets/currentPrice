import React from 'react';
import { useSelector } from 'react-redux';

const Times =()=>{
   
    const time = useSelector(state => state.currentPrice.current.time)

    return(
        <div>
            <p>{time.updated}</p> <br/>
            <p>{time.updatedISO}</p> <br/>
            <p>{time.updateduk}</p>
        </div>
    )
}

export default Times;