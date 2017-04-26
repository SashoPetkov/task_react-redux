
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_REPLAY = 'ADD_REPLAY';
export const VIDEO_URL = 'VIDEO_URL';

  // add comment

export function addComments(comment) {
  return {
    type: ADD_COMMENT,
    comment: comment
  }
}

  // add replay

export function addReplay(replay, index) {
  return {
    type: ADD_REPLAY,
    replay: replay,
    index: index
  }
}

  // save url from initialContainer

export function saveUrl(videoUrl) {
  return {
    type: VIDEO_URL,
    videoUrl:videoUrl
  }
}