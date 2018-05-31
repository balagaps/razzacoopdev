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

class Invoice extends Component {
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
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="6">
                    <strong>INVOICE</strong>
                  </Col>
                  <Col sm="6" align="right">
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-save"></i> Save</Button>
                    &nbsp;&nbsp;
                    <Button type="reset" size="sm" color="primary"><i className="fa fa-print"></i> Print</Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="6">
                    <b>Reference Number:</b> 90-98792
                  </Col>
                  <Col xs="6" align="right">
                    <b>Transaction Date:</b> 05/22/2018 12:45
                  </Col>
                </Row>
                <br/><br/>
                <Row>
                  <Col xs="6">
                    <b>Received From:</b> <br/>
                    Juan Dela Cruz <br/>
                    Tel No#: +639178807825 <br/>
                    Address: Makati Ave. cor. Gil Puyat, Makati City
                  </Col>
                </Row>
                <br/><br/>
                
                <Table striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Account Number</th>
                    <th>Amount Paid</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Regular Loan</td>
                      <td>Loan Account 80-389592</td>
                      <td>1,200.00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Interest on Regular Loan</td>
                      <td>Loan Account 80-389592</td>
                      <td>300.00</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Penalties</td>
                      <td>Loan Account 80-389592</td>
                      <td>120.00</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Paid Up Share Capital</td>
                      <td>Account No. SC-208356</td>
                      <td>200.00</td>
                    </tr>
                  </tbody>
                </Table>
                <br/><br/>
                
                <Row>
                  <Col xs="6"></Col>
                  <Col xs="4" align="right">&nbsp;&nbsp;&nbsp;&nbsp;_________________________<br/><h4>&nbsp;&nbsp;&nbsp;&nbsp;Total:&nbsp;&nbsp;&nbsp;1,820.00</h4></Col>
                </Row>
                <br/><br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Invoice;
