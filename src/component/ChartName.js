import React from 'react';
import { useSelector } from 'react-redux';

const ChartName =()=>{
   
    const chartName = useSelector(state => state.currentPrice.current.chartName)

    return(
        <div>
            {chartName}
        </div>
    )
}

export default ChartName;