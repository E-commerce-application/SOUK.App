import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}from "../ActionTypes/cartActionTypes";
import axios from "axios";

export const addToCart = (id, quantity,color,size) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/find/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data._id,
      title: data.title,
      img: data.img,
      price: data.price,
      countInStock: data.inStock,
      quantity,
      color,
      size,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};


// import {
//   EDIT_QUANTITY_PRODUCT,
//   EDIT_QUANTITY_PRODUCT_FAILED,
//   EDIT_QUANTITY_PRODUCT_SUCCESS,
// } from "../ActionTypes/cartActionTypes";

// // case types.UPDATE_CART:
// //       const cartFormArr = Object.keys(action.payload).map((key, index) => {
// //         return action.payload[key];
// //       });

// //       doesItemExist = false;

// //       const newProdCartState = state.map((item) => {
// //         let itemFound = cartFormArr.find((element) => element.Id === item.Id);
// //         if (itemFound) {
// //           item.quantity = itemFound.quantity;
// //           doesItemExist = true;
// //         }
// //         return item;
// //       });

// //       if (doesItemExist) {
// //         return newProdCartState;
// //       }

// export const editquantityProdCard = (payload) => async (dispatch) => {
//   dispatch({ type: EDIT_QUANTITY_PRODUCT });

//   try {
//     const res = await localStorage.getItem("products");
//     console.log(res);
//     const cartFormArr = Object.keys(payload).map((key, index) => {
//       return payload[key];
//     });

//     dispatch({ type: EDIT_QUANTITY_PRODUCT_SUCCESS, payload: res.data });
//   } catch (error) {
//     console.log("update cart error", error);
//     dispatch({
//       type: EDIT_QUANTITY_PRODUCT_FAILED,
//       payload: error.res.data.msg,
//     });
//   }
// };
