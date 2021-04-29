import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});