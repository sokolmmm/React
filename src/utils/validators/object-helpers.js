export const updateObjInArray = (items, objPropName, itemId, newObjPropps) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjPropps };
    }
    return u;
  });
};
