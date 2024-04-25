const add = (product) => {
  return {
    type: "add_product",
    payload: product,
  };
};
const remove = (product) => {
  return {
    type: "remove_product",
    payload: product,
  };
};
const increase = (product) => {
  return {
    type: "increase",
    payload: product,
  };
};
const decrease = (product) => {
  return {
    type: "decrease",
    payload: product,
  };
};
const clear = () => {
  return {
    type: "clear",
  };
};
const checkout = () => {
  return {
    type: "checkout",
  };
};
export { add, remove, clear, checkout, increase, decrease };
