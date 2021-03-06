import React from 'react'
import GameBoardSquare from "./GameBoardSquare";

const GameBoard = (props)=>{

    let GameBoardContainerCss = 'GameBoardContainer ' + props.gameData.boardSize;

    if(props.gameData.restartButton || props.gameData.gameWon || props.gameData.gameTied){
        GameBoardContainerCss = GameBoardContainerCss + ' offScreen'
    }

    const createBoard = () =>{
        let gameBoardSize;
        if(props.gameData.boardSize === 'Rookie'){
            gameBoardSize = 3;
        }else if(props.gameData.boardSize === 'Pro'){
            gameBoardSize = 8;
        }else{
            gameBoardSize = 19;
        }

        if(!props.gameData.consoleScreen){
            let board = [];
            for(let i = 0; i < gameBoardSize; i++){
                for(let j = 0; j < gameBoardSize; j++){
                    board.push(<GameBoardSquare gameData={props.gameData} blockClick={props.blockClick} positionX={i} positionY={j} key={'row'+i+'-col'+j}/>)
                }
            }
            return board
        }
    };

    return(
        <div className='GameBoard'>
            <div className={GameBoardContainerCss}>
                {createBoard()}
            </div>
            <canvas id="canvas" width="750" height="400"/>
        </div>
    )
};

export default GameBoard
