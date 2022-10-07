import React from 'react';
import { useSelector } from 'react-redux';

const Disclaimer =()=>{
    const disclaimer = useSelector(state => state.currentPrice.current.disclaimer)
    return(
        <div>
            <h2>{disclaimer}</h2>
        </div>
    )
}

export default Disclaimer;