import React from 'react';
import ReactDOM from 'react-dom';
import NewLead from './NewLead';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewLead />, div);
  ReactDOM.unmountComponentAtNode(div);
});