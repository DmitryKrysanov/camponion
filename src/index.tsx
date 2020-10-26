import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2356b2',
    },
    secondary: {
      main: '#f7923a',
    },
  },
});

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>
  document.getElementById('root'),
);

serviceWorker.unregister();
