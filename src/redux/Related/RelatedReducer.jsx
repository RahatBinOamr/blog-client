import { RELATED } from './RelatedAction';

const initialState = {
  buttonValue: '',
};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case RELATED:
      return {
        ...state,
        buttonValue: action.payload,
      };
    default:
      return state;
  }
};

export default relatedReducer;
