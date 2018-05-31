import React from 'react';
import ReactDOM from 'react-dom';
import AccountSearch from './AccountSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
