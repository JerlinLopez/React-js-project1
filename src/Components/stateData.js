import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

class StateData extends React.Component{
  constructor(){
  super()

  this.state = {
    stateData : {}
  }
  }

  componentDidMount (){
    axios.get("https://data.covid19india.org/state_district_wise.json")
    .then(res =>{
      this.setState({stateData:res.data});
    })
  }

  render() {

    let keys = Object.keys(this.state.stateData);

    return(
      <div className='row'>
        <div className='col-md-12'>

        <Accordion>
          {
            keys.map((itm,key) =>{

              let districts = this.state.stateData[itm].districtData;
              let districts_keys = Object.keys(districts);
              let total_active = 0;
              let total_confirmed = 0;
              let total_deaths = 0;
              let total_recover = 0;
              let district_list = [];

              for(let x in districts){
               total_active += districts[x].active;
               total_confirmed += districts[x].confirmed;
               total_deaths += districts[x].deceased;
               total_recover += districts[x].recovered;
               let ob = districts[x];
               ob["district_name"] = x;
               district_list.push(ob);
              }
                return(
                  <Accordion.Item eventKey= {key}>
                  <Accordion.Header>
                    {itm} - 
                   <span className='btn btn-light'> Total Cases - {total_confirmed}</span> 
                     <span className='btn btn-light'>Active - {total_active}</span>
                     <span className='btn btn-light'>Recovered - {total_recover}</span>
                     <span className='btn btn-light'>Death - {total_deaths}</span>
                     </Accordion.Header> 
                  <Accordion.Body>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <td>Districts</td>
                          <td>Confirmed</td>
                          <td>Active</td>
                          <td>Recovered</td>
                          <td>Deaths</td>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          district_list.map((itm,key)=>{
                            return(
                              <tr>
                                <td>{itm.district_name}</td>
                                <td>{itm.confirmed}</td>
                                <td>{itm.active}</td>
                                <td>{itm.recovered}</td>
                                <td>{itm.deceased}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
                )
            })
          }
    </Accordion>

        </div>
       
      </div>
    )
  }
}

export default StateData;