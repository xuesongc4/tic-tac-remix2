import React from 'react'

const GameBoardSquare = (props)=>{

    const renderMarker = () =>{
        if(props.gameData.gameState[props.positionX][props.positionY]==="X"){
            return (require("../assets/images/playerX.png"))
        }else if(props.gameData.gameState[props.positionX][props.positionY]==="O"){
            return (require("../assets/images/playerO.png"))
        }else{
            return ""
        }
    }

    let style = 'gameSquare';

    return(
        <div className={style} data-row={props.positionX} data-column={props.positionY}
             onClick={()=>{
                 props.scoreBlockClick(props.positionX,props.positionY);
                 style = 'gameSquare noClick'
             }}>
            <img src={renderMarker()} alt=''/>
        </div>
    )
}

export default GameBoardSquare
