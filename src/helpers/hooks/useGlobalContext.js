import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
} from "helpers/constants/cartConstant";
import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);

  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used within a provider");
  }
  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : { [action.item.id]: action.item },
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc, key) => {
            const item = state.cart[key];
            acc[item.id] = item;
            return acc;
          }, {}),
      };

    case CART_EMPTY:
      return {
        ...state,
        cart: initialState.cart,
      };

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
