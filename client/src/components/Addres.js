import React, { Component } from "react";
import API from "../utils/API";

class Address extends Component {
  state = {
    done: false,
    address: []
  };
  
  getAddress = async  ( elem,index) => {
    const result = await API.getAddress(elem[1], elem[2])
    const value = result.data.display_name;
    const address = this.state.address;
    address[index] = value;
    this.setState({ address})
  }

  render() { 
    const { data } = this.props
    console.log({ data })
    console.log(  'render Adress'  )
    return (
      <div>
        <ol style={{ listStyleType: "none" }}>
          {data.map((elem,index ) => {
              this.getAddress(elem,index )
              const address = this.state.address[index] ||  '----'
              return (
                <li style={{ margin: "8px", padding: "6px", fontSize: "20px", color: "white"}}>
                  <strong>Location: </strong> {elem[0]}
                  <br></br>
                  <strong>Address: </strong> {address}
                  <br></br>
                  <strong>Distance: </strong> {elem [3]} miles
                </li>
              ); 
          })}
        </ol> 
      </div>
    );
  }
}

export default Address;


