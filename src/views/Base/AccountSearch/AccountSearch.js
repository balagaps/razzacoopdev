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
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText
} from 'reactstrap';

var full_list= 
[
  {number: "2006-10001", name:"Cindy Abraham"},
  {number: "2002-10002", name:"Charlene Acuzar"},
  {number: "2008-10003", name:"Jessa Aguinaldo"},
  {number: "2003-10004", name:"Ariane Gonzales"},
  {number: "2006-10005", name:"Bea Doria"},
  {number: "2007-10006", name:"Genese Evasco"},
  {number: "2009-10007", name:"Karen Frias"},
  {number: "2004-10008", name:"Rica David"},
  {number: "2005-10009", name:"Kaye Magbanua"},
  {number: "2004-10010", name:"Kristine Mallari"},
  {number: "2005-10010", name:"Joanne Mesa"}
];

class AccountSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: full_list,
       items: []
    };
    this.filterList = this.filterList.bind(this);
    
    //load url parameters
    var params={};
    var query = this.props.location.search.substring(1);
    var vars = query.split('&');
    
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      var param=pair[0];
      params[param]=decodeURIComponent(pair[1]);
    }
    
    this.state.return_to=params.return_to;
  }
  
  filterList= function(event){
    var acct_name_search = full_list;
    acct_name_search = acct_name_search.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    
    var acct_no_search = full_list;
    acct_no_search = acct_no_search.filter(function(item){
      return item.number.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    
    this.setState({items: acct_name_search.concat(acct_no_search)});
  }
  
  handleListItemClick(item) {
    if(item.number!=null){
      window.location="http://localhost:3000/#/base/" + this.state.return_to + "?account_number="+item.number+"&account_name="+item.name;
    }
  }
  
  componentWillMount= function(){
    this.setState({items: this.state.initialItems})
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3"></Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Search Loan Accounts</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Input type="text" id="name" placeholder="Type Account Number/Account Name" onChange={this.filterList}/>
                    </FormGroup>
                  </Col>
                </Row>                
                <Row>      
                  <Col xs="12">
                    <ListGroup onClick={this.handleListItemClick.bind(this)}>
                      {this.state.items.map(item =>
                        <ListGroupItem key={item.number} onClick={() => this.handleListItemClick(item)}>
                          <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                          <ListGroupItemText>Acct No. {item.number}</ListGroupItemText>
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Col>
                </Row>                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AccountSearch;
