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
} from 'reactstrap';

class LoanPayment extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
    
    
    //load url parameters
    var params={};
    var query = this.props.location.search.substring(1);
    var vars = query.split('&');
    
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      var param=pair[0];
      params[param]=decodeURIComponent(pair[1]);
    }
    
    this.state.account_number=params.account_number;
    this.state.account_name=params.account_name;
    
    if(this.state.account_name!=null){
      this.state.principal=0,
      this.state.interest=0,
      this.state.penalties=0,
      this.state.amount_due="4940",
      this.state.date_due="May 15, 2018",
      this.state.principal_due=4000,
      this.state.interest_due=640,
      this.state.penalties_due=300  
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  onAccountNumberChange = (e) => {
    this.setState({
      account_number: e.target.value,
      account_name: "", 
      account_balance: 0,
      amount_due: 0,
      date_due: "",
      principal_due: 0,
      interest_due: 0,
      penalties_due: 0
    })
  }
  
  onPaymentAmountChange = (e) => {
    this.state.payment_amount=e.target.value;
    
    if(this.state.payment_amount>this.state.penalties_due){
      this.setState({
        principal: this.state.payment_amount-this.state.interest_due-this.state.penalties_due,
        interest: this.state.interest_due,
        penalties: this.state.penalties_due
      });
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    window.location="http://localhost:3000/#/base/invoice";
  }
  
  handleCancel = (e) => {
    e.preventDefault();
    window.location="http://localhost:3000/#/dashboard";
  }
  
  handleSearch = (e) => {
    e.preventDefault();
    window.location="http://localhost:3000/#/base/accountsearch?return_to=loanpayment";
  }
  
  render() {    
    return (
    
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="2">
          </Col>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Loan Payment</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Account Number</Label>
                      <InputGroup>
                        <Input type="text" onChange={this.onAccountNumberChange} value={this.state.account_number} placeholder="" />
                        <InputGroupAddon addonType="append">
                          <Button type="button" color="primary" onClick={this.handleSearch}><i className="fa fa-search"></i> Search</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Account Name</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.account_name} onChange={this.onAccountNumberChange} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Amount Due</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.amount_due} disabled/>
                    </FormGroup>
                  </Col>
                  
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Date Due</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.date_due} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Payment Amount</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.payment_amount} onChange={this.onPaymentAmountChange} required />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Principal</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.principal} disabled/>
                    </FormGroup>
                  </Col>
                  
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Principal Due</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.principal_due} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                  
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Interest</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.interest} disabled/>
                    </FormGroup>
                  </Col>
                  
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Interest Due</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.interest_due} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                  
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Penalties</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.penalties} onChange={this.onPenaltiesChange} disabled/>
                    </FormGroup>
                  </Col>
                  
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Penalties Due</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.penalties_due} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                
              </CardBody>
              
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}>Submit</Button>
                &nbsp;&nbsp;
                <Button type="reset" size="sm" onClick={this.handleCancel}>Cancel</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoanPayment;
