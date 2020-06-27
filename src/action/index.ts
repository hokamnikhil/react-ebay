import { actionCreatorFactory } from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
// action creators
const create = actionCreatorFactory("APP");

const createAsync = asyncFactory(create);

export const getCurrentProductlist = create("PRODUCT_LIST");
export const addProduct = create<{
    title: string;
    price: string;
    image: string;
}>('ADD_PRODUCT')
export const getSignIn = create("SIGNIN");
export const getSignOut = create("SIGNOUT");

