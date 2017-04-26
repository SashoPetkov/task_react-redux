import { combineReducers } from 'redux';

import comments from './comment_reducer';
import videoUrl from './videoUrl_reducer';

const rootReducer = combineReducers({
  comments,
  videoUrl
});

export default rootReducer;
