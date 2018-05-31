import React from 'react';
import ReactDOM from 'react-dom';
import CashWithdrawal from './CashWithdrawal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
