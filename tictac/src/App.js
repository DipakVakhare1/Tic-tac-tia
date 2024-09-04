// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './component/Board';
import { makeMove, restartGame } from './store/action';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};


const App = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.squares);
  const xIsNext = useSelector((state) => state.xIsNext);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    dispatch(makeMove(i));
  };

  const handleRestart = () => {
    dispatch(restartGame());
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button  jonClick={handleRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default App;