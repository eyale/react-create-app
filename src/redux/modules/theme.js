const THEME_ON_CHANGE = 'THEME_ON_CHANGE';
const initialState = {
  isLight: true
};

if (window.localStorage.getItem('isLight') !== null) {
  initialState.isLight = window.localStorage.getItem('isLight') === 'true';
}

if (window.localStorage.getItem('isLight') === null) {
  window.localStorage.setItem('isLight', initialState.isLight);
}

export const themeReducer = (state = initialState, action) => {
  if (action.type === THEME_ON_CHANGE) {
    window.localStorage.setItem('isLight', !state.isLight);
    return {...state, isLight: !state.isLight};
  }

  return state;
};
