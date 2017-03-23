import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDcwPg_-th_J_kgQ-7oCezBsUKDTjwUaqM",
      authDomain: "manager-e3d03.firebaseapp.com",
      databaseURL: "https://manager-e3d03.firebaseio.com",
      storageBucket: "manager-e3d03.appspot.com",
      messagingSenderId: "855799248377"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
