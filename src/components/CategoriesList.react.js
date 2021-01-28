import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesList = () => {
    const productList = useSelector((state) => state.products);
    const productCategories = Object.keys(productList);
    return(
        <>
            {productCategories.map(category => {
                return(
                    <>
                        <h2>{category}</h2>
                        <img src={productList[category][0].image} width="100px"/>
                    </>
                );
            })}

        </>
    );
}

export default CategoriesList;