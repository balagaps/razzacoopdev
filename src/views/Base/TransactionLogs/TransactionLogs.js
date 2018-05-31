import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table
} from 'reactstrap';

class TransactionLogs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <b>Detail</b>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Transaction Type</th>
                      <th>Datetime Stamp</th>
                      <th>Amount</th>
                      <th>Account Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cash Deposits</td>
                      <td>9:45AM</td>
                      <td>100.00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Cash Withdrawal</td>
                      <td>10:35AM</td>
                      <td>200.00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Loan Payments</td>
                      <td>10:40AM</td>
                      <td>400.00</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <b>Summary</b>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Transaction Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cash Deposits</td>
                      <td>100.00</td>
                    </tr>
                    <tr>
                      <td>Cash Withdrawal</td>
                      <td>200.00</td>
                    </tr>
                    <tr>
                      <td>Loan Payments</td>
                      <td>400.00</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TransactionLogs;
