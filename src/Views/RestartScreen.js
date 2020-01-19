import React from 'react'
import '../style/RestartScreen.css'

const RestartScreen = (props) => {
    let style = 'RestartScreen offScreen';
    if(props.gameData.restartButton || props.gameData.gameWon){
        style = 'RestartScreen'
    }

    const message = () =>{
        let message="";
        if(props.gameData.gameWon && props.gameData.player1Turn){
              message = props.gameData.player2 + "is a SUPERSTAR!"
        }
        else if(props.gameData.gameWon && !props.gameData.player1Turn){
            message = props.gameData.player1 + " is a SUPERSTAR!"
        }
        return message
    }

    return (
        <div className={style}>
            <div className="message">
                {message()}
            </div>
            <div className="button-container">
                <div className="button" onClick={props.resetGameClick}>Play Again</div>
                <a href="/" className="button">Restart Game</a>
            </div>
        </div>
    )
}

export default RestartScreen