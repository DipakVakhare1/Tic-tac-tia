// src/store/reducers.js
import { actionTypes } from './action';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

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

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_MOVE:
      const squares = state.squares.slice();
      if (calculateWinner(squares) || squares[action.index]) {
        return state;
      }
      squares[action.index] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        squares,
        xIsNext: !state.xIsNext,
      };
    case actionTypes.RESTART_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
