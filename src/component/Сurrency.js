import React from 'react';
import { useSelector } from 'react-redux';

const Сurrency =()=>{


    const usd = useSelector(state => state.currentPrice.current.bpi.USD)
    const gbp = useSelector(state => state.currentPrice.current.bpi.GBP)
    const eur = useSelector(state => state.currentPrice.current.bpi.EUR)

    return(
        <div>
            <div>
                {usd.code}
                {usd.symbol}
                {usd.rate}
                {usd.description}
                {usd.rate_float}
            </div>
            <div>
                {gbp.code}
                {gbp.symbol}
                {gbp.rate}
                {gbp.description}
                {gbp.rate_float}
            </div>
            <div>
                {eur.code}
                {eur.symbol}
                {eur.rate}
                {eur.description}
                {eur.rate_float}
            </div>

        </div>
    )
}

export default Сurrency;