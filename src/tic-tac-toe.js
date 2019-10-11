class TicTacToe {
    constructor() {
        // задаем начальные данные: первый игрок - х, доска пустая
        this.currentPlayerSymbol = 'x';
        this.gameBoard = [['','',''],['','',''],['','','']];
    }

    getCurrentPlayerSymbol() {
        // возвращаем символ текущего игрока
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        // проверяем, занято ли выбранное поле; если занято - не меняем игрока
        if (this.gameBoard[rowIndex][columnIndex] !== '') {
            this.currentPlayerSymbol = this.currentPlayerSymbol;
        }

        // если поле пустое, записываем в него текущий символ и меняем игрока
        else {
            this.gameBoard[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o';
            }
            else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        // если ничья или есть победитель - игра окончена
        if (this.isDraw() || (this.getWinner() !== null)) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        // проверяем, есть ли на доске хоть один выигрышный вариант, если есть - возвращаем победителя
        if (
            this.gameBoard[0].join('') === 'xxx' 
            || this.gameBoard[1].join('') === 'xxx' 
            || this.gameBoard[2].join('') === 'xxx' 
            || (this.gameBoard[0][0] === 'x' && this.gameBoard[1][0] === 'x' && this.gameBoard[2][0] === 'x') 
            || (this.gameBoard[0][1] === 'x' && this.gameBoard[1][1] === 'x' && this.gameBoard[2][1] === 'x')
            || (this.gameBoard[0][2] === 'x' && this.gameBoard[1][2] === 'x' && this.gameBoard[2][2] === 'x')
            || (this.gameBoard[0][0] === 'x' && this.gameBoard[1][1] === 'x' && this.gameBoard[2][2] === 'x')
            || (this.gameBoard[2][0] === 'x' && this.gameBoard[1][1] === 'x' && this.gameBoard[0][2] === 'x')
            ) {
            return 'x';
            }
        
        else if (
            this.gameBoard[0].join('') === 'ooo' 
            || this.gameBoard[1].join('') === 'ooo' 
            || this.gameBoard[2].join('') === 'ooo' 
            || (this.gameBoard[0][0] === 'o' && this.gameBoard[1][0] === 'o' && this.gameBoard[2][0] === 'o') 
            || (this.gameBoard[0][1] === 'o' && this.gameBoard[1][1] === 'o' && this.gameBoard[2][1] === 'o')
            || (this.gameBoard[0][2] === 'o' && this.gameBoard[1][2] === 'o' && this.gameBoard[2][2] === 'o')
            || (this.gameBoard[0][0] === 'o' && this.gameBoard[1][1] === 'o' && this.gameBoard[2][2] === 'o')
            || (this.gameBoard[2][0] === 'o' && this.gameBoard[1][1] === 'o' && this.gameBoard[0][2] === 'o')
            ) {
            return 'o';
            }
            
        else {
            return null;
        }
    }

    noMoreTurns() {
        // если пустых полей нет - нет и доступных ходов
        if (this.gameBoard[0].indexOf('') === -1 && this.gameBoard[1].indexOf('') === -1 && this.gameBoard[2].indexOf('') === -1) {
            return true;
        }
        else {
            return false;
        }
    }

    isDraw() {
        // если нет доступных ходов и нет победителя - ничья
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        // если заданное поле не пустое, возвращаем записанный в него символ
        if (this.gameBoard[rowIndex][colIndex] === '') {
            return null;
        }
        else {
            return this.gameBoard[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
