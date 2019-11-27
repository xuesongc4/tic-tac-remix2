import React,{Component}  from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

class App extends Component {
    state = {
        boardSize: 'rookie',
        consoleScreen: true,
        players: ['','']
    }

    changeConsoleScreen = (player1,player2) =>{
        this.setState({consoleScreen:false, players:[player1,player2]})
    }
    changeBoardSize = (size) =>{
        this.setState({boardSize:size})
    }

    render() {
        return (
            <div className="App">
                <GameScreen/>
                <ConsoleScreen consoleScreenClick={this.changeConsoleScreen} changeBoardSizeClick={this.changeBoardSize} currentLevel={this.state.boardSize}/>
            </div>
        );
    }
}

export default App;
