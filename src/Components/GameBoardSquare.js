import React from 'react'

const GameBoardSquare = (props) => {

    const renderMarker = () => {

        if (props.gameData.gameState[props.positionX][props.positionY] === "X") {
            return (require("../assets/images./playerX.png"))
        } else if (props.gameData.gameState[props.positionX][props.positionY] === "O") {
            return (require("../assets/images/playerO.png"))
        }
    }

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
            <img src={renderMarker()} alt=''/>
        </div>
    )
}

export default GameBoardSquare
