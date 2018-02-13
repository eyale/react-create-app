const THEME_ON_CHANGE = 'THEME_ON_CHANGE';

export const themeOnChangeAction = e => ({
  type: THEME_ON_CHANGE,
  payload: e.target.value
});

const initialState = {
  isLight: true
};

export const themeReducer = (state = initialState, action) => {
  if (action.type === THEME_ON_CHANGE) {
    return {...state, isLight: !state.isLight};
  }

  return state;
};
