import React from 'react'
import './ChessBoard.css'

class ChessBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeOfBoard: 8,
            knightX: -1,
            knightY: -1,
            targetX: -1,
            targetY: -1,
            moves: -1
        };
        this.handleClicked = this.handleClicked.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.renderChess = this.renderChess.bind(this);
        this.hint = this.hint.bind(this);
    }

    static countSteps(dp, x, y, targetX, targetY) {
        if (x === targetX && y === targetY) {
            return dp[0][0];
        } else {
            if (dp[Math.abs(x - targetX)][Math.abs(y - targetY)] !== 0) {
                return dp[Math.abs(x - targetX)][Math.abs(y - targetY)];
            } else {
                var x1;
                var y1;
                var x2;
                var y2;
                if (x <= targetX) {
                    if (y <= targetY) {
                        x1 = x + 2;
                        y1 = y + 1;
                        x2 = x + 1;
                        y2 = y + 2;
                    } else {
                        x1 = x + 2;
                        y1 = y - 1;
                        x2 = x + 1;
                        y2 = y - 2;
                    }
                } else if (y <= targetY) {
                    x1 = x - 2;
                    y1 = y + 1;
                    x2 = x - 1;
                    y2 = y + 2;
                } else {
                    x1 = x - 2;
                    y1 = y - 1;
                    x2 = x - 1;
                    y2 = y - 2;
                }
                dp[Math.abs(x - targetX)][Math.abs(y - targetY)] =
                    Math.min(ChessBoard.countSteps(dp, x1, y1, targetX, targetY),
                        ChessBoard.countSteps(dp, x2, y2, targetX, targetY)) + 1;
                dp[Math.abs(y - targetY)][Math.abs(x - targetX)]
                    = dp[Math.abs(x - targetX)][Math.abs(y - targetY)];
                return dp[Math.abs(x - targetX)][Math.abs(y - targetY)];
            }
        }
    }

    static createArray(nrows, ncols) {
        var result = new Array(nrows);
        for (var i = 0; i < nrows; i++) {
            result[i] = new Array(ncols)
        }
        return result
    }

    static countMoves(sizeOfBoard, knightX, knightY, targetX, targetY) {
        let n = sizeOfBoard * sizeOfBoard;
        let dp = ChessBoard.createArray(sizeOfBoard, sizeOfBoard);
        for (let i = 0; i < sizeOfBoard; i++) {
            for (let j = 0; j < sizeOfBoard; j++) {
                dp[i][j] = 0;
            }
        }
        if ((knightX === 1 && knightY === 1 && targetX === 2 && targetY === 2)
            || (knightX === 2 && knightY === 2 && targetX === 1 && targetY === 1)) {
            return 4;
        } else if ((knightX === 1 && knightY === n && targetX === 2 && targetY === n - 1)
            || (knightX === 2 && knightY === n - 1 && targetX === 1 && targetY === n)) {
            return 4;
        } else if ((knightX === n && knightY === 1 && targetX === n - 1 && targetY === 2)
            || (knightX === n - 1 && knightY === 2 && targetX === n && targetY === 1)) {
            return 4;
        } else if ((knightX === n && knightY === n && targetX === n - 1 && targetY === n - 1)
            || (knightX === n - 1 && knightY === n - 1 && targetX === n && targetY === n)) {
            return 4;
        } else {
            dp[1][0] = 3;
            dp[0][1] = 3;
            dp[1][1] = 2;
            dp[2][0] = 2;
            dp[0][2] = 2;
            dp[2][1] = 1;
            dp[1][2] = 1;

            return ChessBoard.countSteps(dp, knightX, knightY, targetX, targetY);
        }
    }

    renderChess(x, y) {
        if (x === this.state.knightX && y === this.state.knightY) {
            return <span style={{"fontSize": "30px"}}>&#9816;</span>;
        } else if (x === this.state.targetX && y === this.state.targetY) {
            return <span style={{"fontSize": "30px"}}>&#8226;</span>;
        } else {
            return "";
        }
    }

    handleClicked(event, x, y) {
        if (this.state.knightX === -1) {
            this.setState(
                {
                    knightX: x,
                    knightY: y
                }
            );
        } else if (this.state.targetX === -1) {
            if (x === this.state.knightX && y === this.state.knightY) {

            } else {
                this.setState(
                    {
                        targetX: x,
                        targetY: y
                    }
                );
                let moves = ChessBoard.countMoves(this.state.sizeOfBoard,
                    this.state.knightX,
                    this.state.knightY,
                    this.state.targetX,
                    this.state.targetY);
                this.setState({moves: moves});
            }
        } else {
            this.setState({knightX: -1, knightY: -1, targetX: -1, targetY: -1, moves: -1});
        }
    }

    renderBoard() {
        let rows = [];
        for (let i = 0; i < this.state.sizeOfBoard; i++) {
            let cols = [];
            for (let j = 0; j < this.state.sizeOfBoard; j++) {
                if ((i + j) % 2 === 1) {
                    cols.push(<td align="center" onClick={event => this.handleClicked(event, i, j)} key={[i, j]}
                                  style={{"backgroundColor": "grey"}}>{this.renderChess(i, j)}</td>)
                } else {
                    cols.push(<td align="center" onClick={event => this.handleClicked(event, i, j)} key={[i, j]}
                                  position={[i, j]}>{this.renderChess(i, j)}</td>)
                }
            }
            rows.push(<tr key={i}>{cols}</tr>);
        }
        return rows;
    }

    hint() {
        if (this.state.knightX === -1) {
            return "Please put a knight";
        } else if (this.state.targetX === -1) {
            return "Please put a target";
        } else {
            return <span>Number of steps: {this.state.moves}</span>
        }
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Minimum steps to reach a target by a Knight</legend>
                    {this.hint()}
                    <table border="4">
                        <tbody>
                        {this.renderBoard()}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        );
    }
}

export default ChessBoard;