const ON_CHANGE = 'ON_CHANGE';

export const inputOnChangeAction = e => ({
  type: ON_CHANGE,
  payload: e.target.value
});

const inputReducer = (state = '', action) => {
  if (action.type === ON_CHANGE) {
    return action.payload;
  }

  return state;
};

export default inputReducer;
