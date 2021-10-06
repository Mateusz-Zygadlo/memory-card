import randomiseArr from './randomiseArr';

const CardsRandom = (props) => {
    const gameCards = ['cardOne', 'cardTwo', 'cardThree', 'cardFour', 'cardFive', 'cardSix', 'cardSeven', 'cardEight', 'cardNine', 'cardTen', 'cardEleven', 'cardTwelve', 'cardThirteen', 'cardFourteen', 'cardFifteen', 'cardSixteen'];
    const randomCards = randomiseArr(gameCards);

    return(
        <div className="container">
            {randomCards.map((item, i) => (
                <div key={i} className={`${item} card`} onClick={(e)=>{props.setValue(e.target.className.split(' ')[0])}} />
            ))}
        </div>
    )
}

export default CardsRandom;