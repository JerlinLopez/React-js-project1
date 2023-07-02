import React from "react";
import StateData from "./stateData";
import Card from "react-bootstrap/Card";
import axios from "axios";

class India extends React.Component{
  constructor(){
    super()
    this.state = {
      data : {}
    }
  }

  componentDidMount (){
    axios.get("https://corona.lmao.ninja/v2/countries/india")
    .then(res =>{
      this.setState({data:res.data})
    })
  }
  render(){
    return(
      <div className="row">
      
      <div className="col-md-12">
        <img src="https://flagsapi.com/IN/flat/64.png" />
        <h1>INDIA</h1>
        <div/>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card style={{ backgroundColor:"lightgrey" }}>
              <Card.Body className="text-center">
                  <Card.Title>Total Cases</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card style={{ backgroundColor:"red" , color:"whitesmoke"}}>
              <Card.Body className="text-center">
                  <Card.Title>Active Cases</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card style={{backgroundColor:"green" , color:"white"}}>
              <Card.Body className="text-center">
                  <Card.Title>Recovered</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>


            <div className="col-md-3">
              <Card style={{backgroundColor:"lightgrey" }}>
              <Card.Body className="text-center">
                  <Card.Title>Total Deaths</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

         
      <div className="col-md-12">
          <div className="col-md-12">
            <StateData/>
          </div>
        </div>

    </div>
    )
  }
}
export default India;
