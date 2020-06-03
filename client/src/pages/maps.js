import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import API from "../utils/API";
import "./maps.css";
import { get } from "mongoose";
import Address from "../components/Addres";

const AnyReactComponent = ({ text, lat, lng, saveFav }) => {
  return (
    <div
      //   onClick = {(text, lat, lng )=> {
      //  axios.

      //   }}
      key={`${lat} ${lng}`}
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
      onClick={() => saveFav([text, lat, lng])}
    >
      {text}
    </div>
  );
};

class SimpleMap extends Component {
  state = {
    topic: "",
    recycleLocations: [],
    center: { lat: 37.7576792, lng: -122.5078115 },
    // address: [],
  };
  componentDidMount = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(this.success, error, options);
    this.getMaps();
  };
  success = (pos) => {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    this.setState({ center: { lat: crd.latitude, lng: crd.longitude } });
    console.log("im in success call");
    console.log(this.state.center.lat);
    console.log(this.state.center.lng);
    this.getMaps(this.state.center.lat, this.state.center.lng);
  };

  getMaps = () => {
    API.getMaps().then((result) => console.log(result));
  };
  getMaterial = (topic) => {
    let saveFunction = this.saveLoc;
    API.getMaterial(topic).then((results) => {
      results = results.data;
      console.log("BACK FROM GET MATERIAL: ", results);
      const materialIds = results.result.map((obj) => obj.material_id);
      // console.log(materialIds);
      API.getID(materialIds, this.state.center.lat, this.state.center.lng).then(function (materialLocations) {
        materialLocations = materialLocations.data.result;
        console.log("back from getID: ", materialLocations);

        const recycleLocations = materialLocations.map((location, index) => {
          console.log(location);
          return [
            location.description,
            location.latitude,
            location.longitude,
            location.distance,
            index + 1,
          ];
        });
        saveFunction(recycleLocations);
        // initMap(recycleLocations)
      });
    });
  };

  saveLoc = (recycleLocations) => {
    console.log(recycleLocations);
    let current = { lat: recycleLocations[0][1], lng: recycleLocations[0][2] };
    this.setState({ recycleLocations: recycleLocations, center: current });
  };
  handleSaveFav = (point) => {
    API.getSave(point);
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("-->", name, value);
    this.setState({ [name]: value });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.getMaterial(this.state.topic);
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    var center = this.state;
    console.log({ center });
    return (
      // Important! Always set the container height explicitly
      <div>
        <input
          onChange={this.handleInputChange}
          name="topic"
          className="input"
          placeholder="Material to Recycle"
        ></input>
        <button className="searchbtn" onClick={this.handleFormSubmit}>
          Search Material
        </button>

        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBZHzPiRourRDRoivXdhrjA4zdOhqEVYcQ",
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.props.zoom}
            center={this.state.center}
          >
            {this.state.recycleLocations.map((elem) => {
              return (
                <AnyReactComponent lat={elem[1]} lng={elem[2]} text={elem[0]} />
              );
            })}
          </GoogleMapReact>
        </div>
        <Address data={this.state.recycleLocations.slice(0, 5)} />
      </div>
    );
  }
}

export default SimpleMap;
