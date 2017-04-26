import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";



import store from './store';
import App from './components/App';
import InitialContainer from './components/initialContainer';
import './styles/reset.css';
import './styles/style.css';


const wrapper = document.querySelector('#wrapper');
wrapper.style.minHeight = `${window.innerHeight}px`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={InitialContainer} />
        <Route path="/video/:videoID" component={App} />
      </Switch>
    </Router>
  </Provider>
,wrapper);
