import React from 'react'
import '../style/ScoreSection.css'
import '../style/GameSection.css'
import ScoreSection from "../Components/ScoreSection";
import GameBoard from "../Components/GameBoard";


const GameScreen = (props) => {

    return (
        <div className={'GameScreen'}>
            <ScoreSection gameData={props.gameData}/>
            <GameBoard gameData={props.gameData} scoreBlockClick={props.scoreBlockClick}/>
        </div>
    )
}

export default GameScreen