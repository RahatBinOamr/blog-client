import { SEARCH_DATA } from './SearchAction';

const initialState = {
  searchValue: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
