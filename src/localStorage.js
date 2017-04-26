
export const saveStore = (state) => {
  return localStorage.setItem('comments', JSON.stringify(state));
};

export const loadStore = () => {
  const allComments = localStorage.getItem('comments');

  if(allComments) {
    return JSON.parse(allComments);
  }
};
