export const RELATED = 'RELATED';

export const relatedBlogSet = value => {
  return {
    type: RELATED,
    payload: value,
  };
};
