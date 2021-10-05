import React, { useState, useEffect } from 'react'
import '../App.css';

const Card = () => {
    const [memoryArr, setMemoryArr] = useState([]);
    const [maxCount, setMaxCount] = useState(0);
    const [count, setCount] = useState(0);
    const [lose, setLose] = useState(false);

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
            setCount(0)
            setMemoryArr([]);
            setLose(true);
        }else{
            setCount(count + 1);
        }

        console.log(memoryArr, count, lose);
    }, [memoryArr])

    return(
        <div>
            {lose ? <h1>you lose</h1> : 
                <div className="container">
                    <div className="cardOne card" onClick={()=>{setMemoryArr(memoryArr.concat('CardOne'))}}>
                        <h1>CardOne</h1>
                    </div>
                    <div className="cardTwo card" onClick={()=>{setMemoryArr(memoryArr.concat('CardTwo'))}}>
                        <h1>CardTwo</h1>
                    </div>
                    <div className="cardThree card" onClick={()=>{setMemoryArr(memoryArr.concat('CardThree'))}}>
                        <h1>CardThree</h1>
                    </div>
                    <div className="cardFour card" onClick={()=>{setMemoryArr(memoryArr.concat('CardFour'))}}>
                        <h1>CardFour</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;