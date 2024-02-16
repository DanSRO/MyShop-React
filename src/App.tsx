import { Provider } from 'react-redux';

import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import {GlobalStyles} from "./styles/GlobalStyles";
import { store } from './redux/store';

import { StyleSheetManager } from 'styled-components';

function App() {
  return(
    <StyleSheetManager shouldForwardProp={(prop) => !['isLogged', 'showCart'].includes(prop)}>
      <Provider store={store}>
        <Header/>
        <ProductsList/>
        <GlobalStyles />
      </Provider>  
  </StyleSheetManager>
  )
}
export default App;