import { ADD_PRODUCT } from "../ActionTypes/cartActionTypes";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        quantity: state.quantity + 1,
        products: [...state.products, payload],
        total: state.total + payload.price * payload.quantity,
      };

    default:
      return state;
  }
};

export default cartReducers;

