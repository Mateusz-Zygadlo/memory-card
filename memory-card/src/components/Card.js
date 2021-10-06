import React, { useState, useEffect } from 'react';
import CardsRandom from './CardsRandom';
import '../App.css';

const Card = () => {
    const [memoryArr, setMemoryArr] = useState([]);
    const [maxCount, setMaxCount] = useState(0);
    const [count, setCount] = useState(-1);
    const [lose, setLose] = useState(false);
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState(false);

    const isFilter = () => {
        const newArr = [];
        let count = 0;

        if(!memoryArr.length == 0){        
            for(let i = 0; i < memoryArr.length; i++) {
                if(!newArr.includes(memoryArr[i])){
                    newArr.push(memoryArr[i]);
                }else{
                    count++;
                }
            }
        }

        if(count > 0){
            return true;
        }else{
            return false;
        }
            
    }

    useEffect(() => {
        if(isFilter()){
            setCount(-1)
            setMemoryArr([]);
            setLose(true);
            setReset(true);

            if(count > maxCount){
                setMaxCount(count - 1);
            }


        }else{
            setCount(count + 1);
        }

        console.log(memoryArr, count, maxCount);
    }, [memoryArr])

    useEffect(() => {
        if(!reset || count > maxCount){
            setMaxCount(count);
        }

        if(count == 8){
            setWinner(true);
        }

        return;
    }, [count])

    return(
        <div>
           <CardsRandom name={memoryArr} />
        </div>
    )
}

export default Card;