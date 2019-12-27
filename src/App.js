import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer  } from 'react-toastify';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import store from './store';

/**
 * Nosso router fica ouvindo as alterações da history e navega altomaticamente
 */


/**
 * Como meu componente Header, também vai precisar ter acesso a parte de navegação
 */
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
