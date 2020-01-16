import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

class App extends Component {
    state = {
        boardSize: 'Rookie',
        consoleScreen: true,
        player1: 'X-treme',
        player2: 'O-mega',
        player1Turn: true,
        gameState: []
    };

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
    };

    changeScreenClick = () =>{
        this.setState({consoleScreen:false})
        this.createBoard();
    };

    createBoard = () =>{
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

    scoreBlockClick = (i,j) =>{
        let newGameState = [...this.state.gameState];
        if(this.state.player1Turn){
            newGameState[i][j] = "X"
        }else{
            newGameState[i][j] = "O"
        }
        this.setState({
            player1Turn: !this.state.player1Turn,
            gameState: newGameState
        });
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
                            consoleScreen: this.state.consoleScreen
                        }
                    }
                    scoreBlockClick={this.scoreBlockClick}
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
