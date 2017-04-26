import { createStore } from "redux";

import initialComments from "./initial_comments";
import rootReducer from "./reducers/root_reducer";
import videoUrl from "./reducers/videoUrl_reducer";
import { saveStore, loadStore } from "./localStorage";

const loadState = loadStore();


const defaultState = {
  comments: initialComments,
  videoUrl
};

const store = createStore(rootReducer, loadState || defaultState);

store.subscribe( () => {
  saveStore(store.getState());
});

export default store;