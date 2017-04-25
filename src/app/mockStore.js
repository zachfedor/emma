const mockStore = (state) => {
  return {
    default: () => {},
    dispatch: () => {},
    subscribe: () => {},
    getState: () => {
      return {...state};
    },
  };
};

export default mockStore;
