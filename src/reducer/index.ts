import { combineReducers } from 'redux';
import app, * as fromApp from './app';

export interface RootState {
    app: fromApp.State;
}

const reducers = {
    app,
}

const allReducers = combineReducers<RootState>(reducers);

export default allReducers;

export const getProductList = (state: RootState) => 
    fromApp.getProductList(state.app);