export const SEARCH_DATA = 'SEARCH_DATA';

export const searchData = value => {
  return {
    type: SEARCH_DATA,
    payload: value,
  };
};
