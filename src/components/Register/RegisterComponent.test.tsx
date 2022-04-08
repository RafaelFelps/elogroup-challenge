import React from 'react';
import ReactDOM from 'react-dom';
import RegisterComponent from './RegisterComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});