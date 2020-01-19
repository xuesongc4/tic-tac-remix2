import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";
import checkWin from "./Util/winCondition"

class App extends Component {
    state = {
        boardSize: 'Rookie',
        consoleScreen: true,
        player1: 'X-treme',
        player2: 'O-mega',
        player1Turn: true,
        gameState: [],
        gameWon: false,
        gameTied: false,
        restartButton: false,
        turns:0
    };

    playerNameInput = (event, index) => {
        const name = event.target.value;
        if (name && index === 1) {
            this.setState({player1: name})
        }
        if (name && index === 2) {
            this.setState({player2: name})
        }
    };

    restartButtonClick = () =>{
        this.setState({restartButton:true})
    }

    resetGame = () =>{
        this.setState({
            player1Turn: true,
            gameState: [],
            gameWon: false,
            gameTied: false,
            turns:0,
            restartButton: false});
        this.createBoard();
    }

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
    };

    changeScreenClick = () =>{
        this.setState({consoleScreen:false})
        this.createBoard();
    };

    createBoard = () =>{
        console.log("create board")
        let setGameState =[];
        let gameBoardSize;
        if(this.state.boardSize === "SuperStar"){
            gameBoardSize = 19;
        }else if(this.state.boardSize === "Pro"){
            gameBoardSize = 8;
        }else{
            gameBoardSize = 3;
        }

        for(let i = 0; i < gameBoardSize; i++){
            setGameState[i] = [];
            for(let j = 0; j < gameBoardSize; j++){
                setGameState[i][j]=[];
            }
        }
        this.setState({gameState:setGameState})
    }

    blockClick = (i,j) =>{
        let newGameState = [...this.state.gameState];
        let currentPlayerTurn;
        let neededToWin;
        let tieCondition;

        this.setState({turns:this.state.turns+1});

        if(this.state.player1Turn){
            currentPlayerTurn = "X";
            newGameState[i][j] = "X";
        }else{
            currentPlayerTurn = "O";
            newGameState[i][j] = "O";
        }

        if(this.state.boardSize === "Rookie"){
            neededToWin = 3;
            tieCondition = 9;
        }
        else if(this.state.boardSize === "Pro"){
            neededToWin = 4;
            tieCondition = 64;
        }
        else{
            neededToWin = 5;
            tieCondition = 361;
        }

        console.log(tieCondition)

        if(checkWin(i,j,neededToWin,newGameState,currentPlayerTurn)){
            console.log("win")
            this.setState({gameWon:true})
        }
        if(this.state.turns >= tieCondition){
            console.log("tie")
            this.setState({gameTied:true})
        }

        this.setState({
            player1Turn: !this.state.player1Turn,
            gameState: newGameState
        });
    };

    render() {
        return (
            <div className="App">
                <GameScreen
                    gameData={
                        {
                            player1:'DJ '+this.state.player1,
                            player2:'DJ '+this.state.player2,
                            player1Turn: this.state.player1Turn,
                            boardSize: this.state.boardSize,
                            gameState: this.state.gameState,
                            consoleScreen: this.state.consoleScreen,
                            gameWon: this.state.gameWon,
                            gameTied: this.state.gameTied,
                            restartButton: this.state.restartButton
                        }
                    }
                    blockClick={this.blockClick}
                    restartClick={this.restartButtonClick}
                    resetGameClick={this.resetGame}
                />
                <ConsoleScreen
                    currentScreen={this.state.consoleScreen}
                    changeScreenClick={this.changeScreenClick}
                    playerNameInput={this.playerNameInput}
                    changeBoardSizeClick={this.changeBoardSize}
                    currentLevel={this.state.boardSize}
                />
            </div>
        );
    }
}

export default App;
