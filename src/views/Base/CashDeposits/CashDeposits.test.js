import React from 'react';
import ReactDOM from 'react-dom';
import CashDeposits from './CashDeposits';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
