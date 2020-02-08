import React, {Component} from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";
import checkWin from "./Util/winCondition"
import * as audioFx from "./Util/audioFiles"
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
        turns: 0,
        audio: 2,
        audioIncrease: true
    };

    audioPlay = (id) => {
        let screen = window.innerWidth;
        if(screen < 1024) {
            return false
        }
        else {
            id.play();
            id.volume = 1
        }
    }

    clickAudioFx = (fx) => {
        if (!fx) {
            fx = 'scratch';
        }
        const audio = document.getElementById(fx);
        this.audioPlay(audio);
    }

    audioPause = () => {
        const audio = document.getElementById("audio");
        audio.volume = 0;
    }

    music_mix = () => {
        const audio = document.getElementById("audio");
        let audioLayers = this.state.audio;
        let increase = this.state.audioIncrease;

        let currentTime = audio.currentTime;
        audio.src = this.track_select(audioLayers);
        audio.currentTime = currentTime;
        this.audioPlay(audio);

        if (increase) {
            audioLayers++;
            if (audioLayers === 7) {
                this.setState({audioIncrease: false})
            }
        } else {
            audioLayers--;
            if (audioLayers === 1) {
                this.setState({audioIncrease: true})
            }
        }
        this.setState({audio: audioLayers})
    }

    track_select = (trackNumber) => {
        if (trackNumber === 1) {
            return audioFx.layer1
        } else if (trackNumber === 2) {
            return audioFx.layer2
        } else if (trackNumber === 3) {
            return audioFx.layer3
        } else if (trackNumber === 4) {
            return audioFx.layer4
        } else if (trackNumber === 5) {
            return audioFx.layer5
        } else if (trackNumber === 6) {
            return audioFx.layer6
        } else if (trackNumber === 7) {
            return audioFx.layer7
        }
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

    restartButtonClick = () => {
        this.setState({restartButton: true});
        this.clickAudioFx('reset');
        this.audioPause();
    }

    resetGame = () => {
        this.setState({
            player1Turn: true,
            gameState: [],
            gameWon: false,
            gameTied: false,
            turns: 0,
            audio: 2,
            audioIncrease: true,
            restartButton: false
        });
        this.createBoard();
        this.clickAudioFx('scratch');
        const audio = document.getElementById('audio');
        audio.src = audioFx.layer1;
        this.audioPlay(audio);
    }

    changeBoardSize = (size) => {
        this.setState({boardSize: size})
        this.clickAudioFx('scratch');
    };

    changeScreenClick = () => {
        const audio = document.getElementById("audio");

        this.setState({consoleScreen: false})
        this.createBoard();
        this.clickAudioFx('scratch');


        let screen = window.innerWidth;
        if(screen < 1024) {
            return false
        }
        else {
            initializeAudioVisualizer(audio);
        }
        this.audioPlay(audio);
    };

    createBoard = () => {
        let setGameState = [];
        let gameBoardSize;
        if (this.state.boardSize === "SuperStar") {
            gameBoardSize = 19;
        } else if (this.state.boardSize === "Pro") {
            gameBoardSize = 8;
        } else {
            gameBoardSize = 3;
        }

        for (let i = 0; i < gameBoardSize; i++) {
            setGameState[i] = [];
            for (let j = 0; j < gameBoardSize; j++) {
                setGameState[i][j] = [];
            }
        }
        this.setState({gameState: setGameState})
    }

    blockClick = (i, j) => {
        let newGameState = [...this.state.gameState];
        let currentPlayerTurn;
        let neededToWin;
        let tieCondition;

        this.clickAudioFx('scratch');
        this.music_mix();

        this.setState({turns: this.state.turns + 1});

        if (this.state.player1Turn) {
            currentPlayerTurn = "X";
            newGameState[i][j] = "X";
        } else {
            currentPlayerTurn = "O";
            newGameState[i][j] = "O";
        }

        if (this.state.boardSize === "Rookie") {
            neededToWin = 3;
            tieCondition = 9;
        } else if (this.state.boardSize === "Pro") {
            neededToWin = 4;
            tieCondition = 64;
        } else {
            neededToWin = 5;
            tieCondition = 361;
        }

        if (checkWin(i, j, neededToWin, newGameState, currentPlayerTurn)) {
            this.setState({gameWon: true});
            this.clickAudioFx('reset');
            this.audioPause();
        } else if (this.state.turns === tieCondition - 1) {
            this.setState({gameTied: true});
            this.clickAudioFx('reset');
            this.audioPause();
        } else
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
                            player1: 'DJ ' + this.state.player1,
                            player2: 'DJ ' + this.state.player2,
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
                <audio id="audio" className="music" src={audioFx.layer1} loop></audio>
                <audio id="scratch" className="clickFx" src={audioFx.scratch}></audio>
                <audio id="reset" className="loadFx" src={audioFx.recordScratch}></audio>
            </div>
        );
    }
}

export default App;
