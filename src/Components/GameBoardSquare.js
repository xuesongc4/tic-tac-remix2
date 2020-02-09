import React from 'react'
import playerXImg from '../assets/images/playerX.png'
import playerOImg from '../assets/images/playerO.png'

const GameBoardSquare = (props) => {

    const renderMarker = () => {
        if (props.gameData.gameState[props.positionX][props.positionY] === "X") {
            return (<img src={playerXImg} alt='X'/>)
        } else if (props.gameData.gameState[props.positionX][props.positionY] === "O") {
            return (<img src={playerOImg} alt='O'/>)
        }
    };

    return (
        <div
            className={
                (props.gameData.gameState[props.positionX][props.positionY] !== "X") &&
                (props.gameData.gameState[props.positionX][props.positionY] !== "O") ?
                    "gameSquare" : "gameSquare noClick"
            }
            data-row={props.positionX} data-column={props.positionY}
            onClick={() => {
                props.blockClick(props.positionX, props.positionY)
            }}>
            {renderMarker()}
        </div>
    )
};

export default GameBoardSquare
