import randomiseArr from './randomiseArr';

const CardsRandom = (props) => {
    const gameCards = ['cardOne', 'cardTwo', 'cardThree', 'cardFour', 'cardFive', 'cardSix', 'cardSeven', 'cardEight'];
    const randomCards = randomiseArr(gameCards);

    return(
        <div className="container">
            {gameCards.map((item, i) => (
                <div key={i} className={`${item} card`} onClick={(e)=>{props.setValue(e.target.className.split(' ')[0])}}>{item}</div>
            ))}
        </div>
    )
}

export default CardsRandom;