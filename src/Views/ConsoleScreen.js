import React from 'react'
import '../style/ConsoleScreen.css'
import DifficultySelector from "../Components/DifficultySelector";
import NameInputs from "../Components/NameInputs";

const ConsoleScreen = (props) => {

    return (
        <div className={!props.currentScreen ? 'ConsoleScreen hide' : 'ConsoleScreen'}>
            <div className="title">
                <h1>Tic-Tac-Remix!</h1>
            </div>
            <div className="startButton" onClick={props.changeScreenClick}>StartGame!</div>
            <DifficultySelector changeBoardSizeClick={props.changeBoardSizeClick}  currentLevel={props.currentLevel}/>
            <NameInputs playerNameInput={props.playerNameInput}/>
        </div>
    )
};

export default ConsoleScreen