import React from 'react';
import {GlobalStyles} from "./styles/GlobalStyles";

import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/PorductsList';

function App() {
  return( 
    <>
      <Header/>
      <ProductsList/>
      <GlobalStyles>Style Components</GlobalStyles>
    </>
  )
}

export default App;
