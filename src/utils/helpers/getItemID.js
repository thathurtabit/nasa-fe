export const getItemID = path =>
  path
    .split('/')
    .filter(section => section)
    .pop();
