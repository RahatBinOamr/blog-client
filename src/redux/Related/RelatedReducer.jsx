import { RELATED } from './RelatedAction';

const initialState = {
  relatedValue: '',
};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case RELATED:
      return {
        ...state,
        relatedValue: action.payload,
      };
    default:
      return state;
  }
};

export default relatedReducer;
