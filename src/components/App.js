import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts);
  },[dispatch])

  return(
    <>
      <CategoriesList />
    </>
  );
  }

export default App;
