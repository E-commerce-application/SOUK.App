import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes/cartActionTypes";



const CART_INITIAL_STATE = {
  cartItems: [],
};


const cartReducers = (state = CART_INITIAL_STATE,{type,payload}) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
         
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    default:
      return state;
  }
};

export default cartReducers;







// import {EDIT_QUANTITY_PRODUCT,
//        EDIT_QUANTITY_PRODUCT_SUCCESS,
//       EDIT_QUANTITY_PRODUCT_FAILED,} from "../ActionTypes/cartActionTypes";

// const initialState = {
//   products:localStorage.getItem("products"),
//   loading: false,
// };

// const cartReducers = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case EDIT_QUANTITY_PRODUCT:
//       return {
//         ...state,
//         loading: true,
//       };
//     case EDIT_QUANTITY_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         // quantity: state.quantity + 1,
//         quantity: [...state.products.quantity, payload],
//       };
//    case EDIT_QUANTITY_PRODUCT_FAILED:
//       return {
//         ...state,
//         quantity: state.quantity + 1,
//         products: [...state.products, payload],
//         total: state.total + payload.price * payload.quantity,
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducers;