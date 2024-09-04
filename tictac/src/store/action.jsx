// src/store/actions.js
export const actionTypes = {
    MAKE_MOVE: 'MAKE_MOVE',
    RESTART_GAME: 'RESTART_GAME',
  };
  
  export const makeMove = (index) => ({
    type: actionTypes.MAKE_MOVE,
    index,
  });
  
  export const restartGame = () => ({
    type: actionTypes.RESTART_GAME,
  });
  