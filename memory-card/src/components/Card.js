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

            if(count > maxCount){
                setMaxCount(count - 1);
            }
        }else{
            setCount(count + 1);
        }

        console.log(memoryArr, count, maxCount);
    }, [memoryArr])

    return(
        <div>
            <div className="container">
                <div className="cardOne card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardOne</h1>
                </div>
                <div className="cardTwo card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardTwo</h1>
                </div>
                <div className="cardThree card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardThree</h1>
                </div>
                <div className="cardFour card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardFour</h1>
                </div>
                <div className="cardFive card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardOne</h1>
                </div>
                <div className="cardSix card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardTwo</h1>
                </div>
                <div className="cardSeven card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardThree</h1>
                </div>
                <div className="cardEight card" onClick={(e)=>{setMemoryArr(memoryArr.concat(e.target.className.split(' ')[0]))}}>
                    <h1>CardFour</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;