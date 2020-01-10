import React from 'react'
import '../style/ScoreSection.css'
import '../style/GameSection.css'
import ScoreSection from "../Components/ScoreSection";
import GameSection from "../Components/GameSection";


const GameScreen = (props) => {
    return (
        <div className={'GameScreen'}>
            <ScoreSection gameData={props.gameData}/>
            <GameSection/>
        </div>
    )
}

export default GameScreen