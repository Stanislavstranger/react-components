export const getPageCount = (totalElements: number, pageSize: number) => {
  return Math.ceil(totalElements / pageSize);
};

export const getPagesArray = (totalElements: number) => {
  const result = [];
  for (let i = 0; i < totalElements; i++) {
    result.push(i + 1);
  }
  return result;
};
