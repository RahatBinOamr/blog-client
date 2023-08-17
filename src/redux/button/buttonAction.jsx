export const BUTTON_CLICKED = 'BUTTON_CLICKED';

export const valueSet = value => {
  return {
    type: BUTTON_CLICKED,
    payload: value,
  };
};
