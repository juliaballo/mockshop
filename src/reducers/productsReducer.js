import React from 'react';
import { POPULATE_PRODUCTS } from '../actions/productsActions';

const groupProductsByCategory = data => {
    const categorizedProducs = {};
    data.forEach(item => {
        if(categorizedProducs.hasOwnProperty(item.category)) {
            categorizedProducs[item.category].push(item);
        } else {
            categorizedProducs[item.category] = [item];
        }
    });
    return categorizedProducs;
}

const productsReducer = (state = {}, action) => {
    switch(action.type) {
        case POPULATE_PRODUCTS: 
            return groupProductsByCategory(action.payload);
        default:
            return state;
    } 
}

export default productsReducer;