import React from 'react';
import ReactDOM from 'react-dom';
import Leads from './LeadsComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leads />, div);
  ReactDOM.unmountComponentAtNode(div);
});