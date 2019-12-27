import { combineReducers } from 'redux';

import cart from './cart/reducer';

/** Usamos o combine reducers para combinar todos os nossos reducers em um estado só */
export default combineReducers({
    cart
});
