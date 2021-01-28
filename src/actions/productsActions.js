export const POPULATE_PRODUCTS = "POPULATE_PRODUCTS";

const populateProducts = products => ({
    type: POPULATE_PRODUCTS,
    payload: products
});

export const getProducts = dispatch => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => dispatch(populateProducts(data)));
}