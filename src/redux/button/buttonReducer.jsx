import { BUTTON_CLICKED } from './buttonAction';

const initialState = {
  buttonValue: '',
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        buttonValue: action.payload,
      };
    default:
      return state;
  }
};

export default buttonReducer;
