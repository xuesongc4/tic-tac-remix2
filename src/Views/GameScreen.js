import React from 'react'
import '../style/GameScreen.css'
import ScoreSection from "../Components/ScoreSection";
import GameSection from "../Components/GameSection";


const GameScreen = (props) => {
    return (
        <div className={'GameScreen'}>
            <ScoreSection/>
            <GameSection/>
        </div>
    )
}

export default GameScreen