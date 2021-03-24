import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducers/combineReducers'
import 'semantic-ui-css/semantic.min.css'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// const port = process.env.PORT || 3000

// app.listen(port, function () {
//   console.log("Server started successfully")
// })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
