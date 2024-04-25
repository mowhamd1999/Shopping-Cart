const initialState = {
  itemSelected: [],
  itemCounter: 0,
  total: 0,
  isCheckOut: false,
};

const sumItem = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  ).toFixed(2);
  return { itemCounter, total };
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_product":
      if (!state.itemSelected.find((item) => item.id === action.payload.id)) {
        state.itemSelected.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        itemSelected: [...state.itemSelected],
        ...sumItem(state.itemSelected),
      };
    case "remove_product":
      const newSelectedItem = state.itemSelected.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        itemSelected: [...newSelectedItem],
        ...sumItem(state.itemSelected),
      };
    case "increase":
      const InfexI = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[InfexI].quantity++;
      return {
        ...state,
        ...sumItem(state.itemSelected),
      };
    case "decrease":
      const IndexD = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[IndexD].quantity--;
      return {
        ...state,
        ...sumItem(state.itemSelected),
      };
    case "checkout":
      return {
        itemSelected: [],
        itemCounter: 0,
        total: 0,
        isCheckOut: true,
      };
    case "clear":
      return {
        itemSelected: [],
        itemCounter: 0,
        total: 0,
        isCheckOut: false,
      };
    default:
      return state;
  }
};
export default cartReducer