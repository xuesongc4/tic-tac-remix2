import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";
import checkWin from "./Util/winCondition"
import initializeAudioVisualizer from "./Util/AudioVisualizer"


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
        turns:0,
        audio:2,
        audioIncrease: true
    };

    componentDidMount() {
        const audio = document.getElementById('audio');
        initializeAudioVisualizer(audio);
        audio.play();
    }

    clickAudioFx= (fx) =>{
        if(!fx){
            fx='scratch';
        }
        const audio = document.getElementById(fx);
        audio.play();
    }

    audioPause= ()=>{
        const audio = document.getElementById("audio");
        audio.pause();
    }

    music_mix = () =>{
        const audio = document.getElementById("audio");
        let audioLayers = this.state.audio;
        let increase = this.state.audioIncrease;

        let currentTime = audio.currentTime;
        audio.src = window.location.origin+"/music/layer"+audioLayers+".mp3";
        audio.currentTime = currentTime;
        audio.play();

        if (increase) {
            audioLayers++;
            if (audioLayers === 7) {
                this.setState({audioIncrease:false})
            }
        }
        else {
            audioLayers--;
            if (audioLayers === 1) {
                this.setState({audioIncrease:true})
            }
        }
        this.setState({audio:audioLayers})
    }

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
        this.setState({restartButton:true});
        this.clickAudioFx('reset');
        this.audioPause();
    }

    resetGame = () =>{
        this.setState({
            player1Turn: true,
            gameState: [],
            gameWon: false,
            gameTied: false,
            turns:0,
            audio:2,
            audioIncrease: true,
            restartButton: false});
        this.createBoard();
        this.clickAudioFx('scratch');
        const audio = document.getElementById('audio');
        audio.src = window.location.origin+"/music/layer1.mp3";
        audio.play();
    }

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
        this.clickAudioFx('scratch');
    };

    changeScreenClick = () =>{
        this.setState({consoleScreen:false})
        this.createBoard();
        this.clickAudioFx('scratch');

        const audio = document.getElementById("audio");
        audio.src = window.location.origin+"/music/layer1.mp3";
        audio.play();
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

        this.clickAudioFx('scratch');
        this.music_mix();

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

       if(checkWin(i,j,neededToWin,newGameState,currentPlayerTurn)){
           this.setState({gameWon:true});
           this.clickAudioFx('reset');
           this.audioPause();
        } else if(this.state.turns === tieCondition-1){
           this.setState({gameTied:true});
           this.clickAudioFx('reset');
           this.audioPause();
       }else
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
