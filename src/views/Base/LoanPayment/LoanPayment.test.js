import React from 'react';
import ReactDOM from 'react-dom';
import LoanPayment from './LoanPayment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
