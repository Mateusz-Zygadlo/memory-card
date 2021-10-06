import React, { useState, useEffect } from 'react';
import CardsRandom from './CardsRandom';
import isFilter from './isFilter';
import '../App.css';

const BoardGame = () => {
    const [memoryArr, setMemoryArr] = useState([]);
    const [maxCount, setMaxCount] = useState(0);
    const [count, setCount] = useState(-1);
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        if(isFilter(memoryArr)){
            setCount(-1)
            setMemoryArr([]);
            setReset(true);

            if(count > maxCount){
                setMaxCount(count - 1);
            }
        }else{
            setCount(count + 1);
        }
    }, [memoryArr])

    useEffect(() => {
        if(!reset || count > maxCount){
            setMaxCount(count);
        }
        if(count == 16){
            setWinner(true);
        }
        if(winner){
            setWinner(false);
        }

        return;
    }, [count])

    const setValueInMemoryArr = (value) => {
        setMemoryArr(memoryArr.concat(value));
    }

    const resetGame = () => {
        setCount(-1)
        setMemoryArr([]);
        setReset(false);
        setWinner(false);
        setMaxCount(0);
    }

    return(
        <div>
            <div>
                {winner ? 
                    <div className="winner">
                        <div>You are winner</div>
                        <button onClick={resetGame}>Reset</button>
                    </div> 
                : null }
                <div className="count">
                    <div>Current count: [{count}]</div>
                    <div>Best count: [{maxCount}]</div>
                </div>
                <CardsRandom setValue={setValueInMemoryArr} />
            </div>
        </div>
    )
}

export default BoardGame;