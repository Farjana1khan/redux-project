import { ADD_TO_CART } from "../Constants";

// eslint-disable-next-line no-unused-vars
const initialState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
     // console.log("reducer", action);
      return[
        ...state,
        {cardData: action.data}
      ]
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
