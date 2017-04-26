
import { ADD_COMMENT, ADD_REPLAY } from '../actions/root_actions';

function comments(state = [], action) {
  switch (action.type) {

    case ADD_REPLAY:
      const newReplay = action.replay;

      return [
        ...state.slice(0, action.index),
        {...state[action.index], replays: [...state[action.index].replays, newReplay] },
        ...state.slice(action.index + 1, )
      ];

    case ADD_COMMENT:
      return [...state, action.comment];

    default:
      return state;
  }
}

export default comments;