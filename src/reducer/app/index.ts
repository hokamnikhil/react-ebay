import { reducerWithInitialState } from "typescript-fsa-reducers";

import { getCurrentProductlist, getSignIn, getSignOut, addProduct } from "../../action";
import ProductModel from "../../models/interfaces/product";
import productList from "../../components/Product/product.json";

export interface State {
  productList: ProductModel[];
  isUserlogin: boolean;
}

export const INITIAL_STATE: State = {
  productList: [],
  isUserlogin: false
};

const App = reducerWithInitialState(INITIAL_STATE);

App.case(
    getCurrentProductlist,
    (state: State): State => ({
        ...state,
        productList: productList
    })
);

App.case(
    addProduct,
    (state: State, { title, price, image }): State => {
        productList.push({title, price, image})
        return {
            ...state,
            productList: productList
        }
    }
)

App.case(
    getSignIn,
    (state: State): State => ({
        ...state,
        isUserlogin: true
    })
)

App.case(
    getSignOut,
    (state: State): State => ({
        ...state,
        isUserlogin: false
    })
)

// selectors

export const getProductList = (state: State) => state.productList;
export const getUserSignIn = (state: State) => state.isUserlogin;
export default App;
