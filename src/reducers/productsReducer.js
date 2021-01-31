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
    console.log("categorizedProducs:", categorizedProducs);
    return categorizedProducs;
}

const productsReducer = (state = {}, action) => {
    console.log("in the reducer");
    switch(action.type) {
        case POPULATE_PRODUCTS: 
            return groupProductsByCategory(action.payload);
        default:
            return state;
    } 
}

export default productsReducer;