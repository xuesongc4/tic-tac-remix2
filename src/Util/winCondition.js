const checkVertical = (i, j, blocksToWin, XorO, stateGameState) => {
    let count = 1;
    let step = 1;
    const gameState = [...stateGameState];

    while(gameState[i - step]){
        if (gameState[i - step][j] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    step = 1;
    while (gameState[i + step]) {
        if (gameState[i + step][j] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    return count >= blocksToWin;
};

const checkHorizontal = (i, j, blocksToWin, XorO, stateGameState) => {
    let count = 1;
    let step = 1;
    const gameState = [...stateGameState];

    while (gameState[i][j - step]) {
        if (gameState[i][j - step] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    step = 1;
    while (gameState[i][j + step]) {
        if (gameState[i][j + step] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    return count >= blocksToWin;
};

const checkLowerDiagonal = (i,j,blocksToWin, XorO, stateGameState) =>{
    let count = 1;
    let step = 1;
    const gameState = [...stateGameState];

    while (gameState[i - step]) {
        if (gameState[i - step][j - step] === XorO) {
            count++;
            step++;
        } else {
            step = 1;
            break;
        }
    }
    step = 1;
    while (gameState[i + step]) {
        if (gameState[i + step][j + step] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    return count >= blocksToWin;
};

const checkUpperDiagonal = (i,j,blocksToWin, XorO, stateGameState) =>{
    let count = 1;
    let step = 1;
    const gameState = [...stateGameState];

    while (gameState[i + step]) {
        if (gameState[i + step][j - step] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    step = 1;
    while (gameState[i - step]) {
        if (gameState[i - step][j + step] === XorO) {
            count++;
            step++;
        } else {
            break;
        }
    }
    return count >= blocksToWin;
};



function checkWin (i,j, blocksToWin, stateGameState, XorO){
    if (checkVertical(i, j, blocksToWin, XorO, stateGameState) || checkUpperDiagonal(i, j, blocksToWin, XorO, stateGameState) || checkHorizontal(i, j, blocksToWin, XorO, stateGameState) || checkLowerDiagonal(i, j, blocksToWin, XorO, stateGameState)) {
        return true
    } else{
        return false
    }
}

export default checkWin;