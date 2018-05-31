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

class CashDeposits extends Component {
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
      this.state.account_balance="23,450.00";
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  onAccountNumberChange = (e) => {
    this.setState({
      account_number: e.target.value,
      account_name: "", 
      account_balance: ""
    })
  }
  
  handleSearch = (e) => {
    e.preventDefault();
    window.location="http://localhost:3000/#/base/accountsearch?return_to=cashdeposits";
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3"></Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Cash Deposits</strong>
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
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Account Balance</Label>
                      <Input type="text" id="name" placeholder="" value={this.state.account_balance} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Deposit Amount</Label>
                      <Input type="text" id="name" placeholder="" required />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              
              <CardFooter>
                <Button type="submit" size="sm" color="primary">Submit</Button>
                &nbsp;&nbsp;
                <Button type="reset" size="sm">Cancel</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CashDeposits;
