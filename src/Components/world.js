import axios from 'axios'
import React from 'react'

class World extends React.Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount (){
    axios.get("https://corona.lmao.ninja/v2/countries")
    .then(res =>{
      this.setState({data:res.data});
    })
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <td>Country</td>
                <td>Total Cases</td>
                <td>Recovered</td>
                <td>Death</td>
              </tr>
            </thead>

            <tbody>
              {
                this.state.data.map((itm,key) =>{
                  return(
                    <tr>
                      <td>{itm.country}
                      <img className='text-center' style = {{width:"50px" , marginLeft:"10px"} } src={itm.countryInfo.flag}/>
                      </td>
                      <td>{itm.cases}</td>
                      <td>{itm.recovered}</td>
                      <td>{itm.deaths}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default World;