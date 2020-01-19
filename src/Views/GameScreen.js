import React from 'react'
import '../style/ScoreSection.css'
import '../style/GameSection.css'
import ScoreSection from "../Components/ScoreSection";
import GameBoard from "../Components/GameBoard";
import RestartScreen from "./RestartScreen";


const GameScreen = (props) => {

    return (
        <div className='GameScreen'>
            <ScoreSection gameData={props.gameData} restartClick={props.restartClick} resetGameClick={props.resetGameClick}/>
            <GameBoard gameData={props.gameData} blockClick={props.blockClick}/>
            <RestartScreen gameData={props.gameData} resetGameClick={props.resetGameClick}/>
        </div>
    )
}

export default GameScreen