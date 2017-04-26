
import { VIDEO_URL } from '../actions/root_actions';

export default function videoUrl(state="", action) {
  switch (action.type) {
    case VIDEO_URL:
      return {videoUrl:action.videoUrl};

    default:
      return state;
  }
}