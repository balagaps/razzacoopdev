import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget01 from '../../views/Widgets/Widget01'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="primary" variant="inverse" header="8,345.00" smallText="Cash in: 9,385 | Cash out: 1,000"/>
          </Col>
          
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="warning" variant="inverse" header="5,345.00" mainText="Savings Deposits" smallText="Transaction Count: 15"/>
          </Col>
          
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="danger" variant="inverse" header="2,500.00" mainText="Savings Withdrawals" smallText="Transaction Count: 3"/>
          </Col>
          
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="info" variant="inverse" header="5,500.00" mainText="Loan Payments" smallText="Transaction Count: 9"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>Reference Number</th>
                <th>Time</th>
                <th>Transaction</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Account Number</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>80-909834</td>
                <td>08:45</td>
                <td>CSD</td>
                <td>Juan Dela Cruz</td>
                <td>800.00</td>
                <td>79-2214-245</td>
              </tr>
              <tr>
                <td>80-983054</td>
                <td>09:25</td>
                <td>CSW</td>
                <td>Pedro Santos</td>
                <td>500.00</td>
                <td>79-2355-244</td>
              </tr>
              <tr>
                <td>80-938541</td>
                <td>10:30</td>
                <td>CLP</td>
                <td>Linda Cruz</td>
                <td>950.00</td>
                <td>65-2155-233</td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
