import { combineReducers } from 'redux';

import { productReducer } from './Product_reducer';
import { selectedProductReducer } from './Product_reducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
