import React from 'react';
import ReactDOM from 'react-dom';
import TransactionLogs from './TransactionLogs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumbs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
