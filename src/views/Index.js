/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import DatePicker from "components/DatePicker/DatePicker.js";


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}

        <Container className="mt-3" fluid>
        <Row className="mt-3">
        <Col xl="12" className="d-flex flex-row-reverse">
          <Button color="primary" type="button" style={{borderRadius: "25px", width: "150px"}}>
            Upgrade
          </Button>
          </Col>
        </Row>
        <Row className="mt-3">
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <Col className="col-auto">
                          <img src={require('assets/img/icons/attr1.png')} height="70px"></img>
                        </Col>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-black text-md font-weight-bold mb-0"
                          >
                            245/500
                          </CardTitle>
                          <span className="text-uppercase text-muted h6 font-weight-light p-0 m-0">
                            Attribute 1
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <Col className="col-auto">
                          <img src={require('assets/img/icons/attr2.png')} height="70px"></img>
                        </Col>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-black text-md font-weight-bold mb-0"
                          >
                            120
                          </CardTitle>
                          <span className="text-uppercase text-muted h6 font-weight-light p-0 m-0">
                            Attribute 2
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <Col className="col-auto">
                          <img src={require('assets/img/icons/attr3.png')} height="70px"></img>
                        </Col>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-black text-md font-weight-bold mb-0"
                          >
                            125
                          </CardTitle>
                          <span className="text-uppercase text-muted h6 font-weight-light p-0 m-0">
                            Attribute 3
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <Col className="col-auto">
                          <img src={require('assets/img/icons/attr4.png')} height="70px"></img>
                        </Col>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-black text-md font-weight-bold mb-0"
                          >
                            0
                          </CardTitle>
                          <span className="text-uppercase text-muted h6 font-weight-light p-0 m-0">
                            Attribute 4
                          </span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
          
          <Row className="mt-3">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                  <Col xl="6">
                    <h4 className="font-weight-bold text-dark ls-1 mb-1 ml-3">
                        Analytics
                      </h4>                  
                    </Col>
                    <Col xl="6" className="d-flex flex-row-reverse">
                    <DatePicker/>                    
                    </Col>
                    
                  </Row>
                  <Row className="align-items-center">                   
                      <ul className="d-flex list-unstyled ml-4">
                        <li className="pr-5 ml-2 h5 border-right"><span className="font-weight-bold h4">245/500 </span><span className="font-weight-light h5"> Attribute</span></li>
                        <li className="pr-5 ml-2 h5 border-right"><span className="font-weight-bold h4">120 </span><span className="font-weight-light h5"> Attribute 1</span></li>
                        <li className="pr-5 ml-2 h5 border-right"><span className="font-weight-bold h4">0 </span><span className="font-weight-light h5"> Attribute 2</span></li>
                        <li className="pr-5 ml-2 h5"><span className="font-weight-bold h4">125 </span><span className="font-weight-light h5"> Attribute 3</span></li>
                      </ul>
                  </Row> 
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
}

export default Index;
