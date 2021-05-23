import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Geocode from "react-geocode";
import GoogleMapReact from 'google-map-react';
import Main from './Main'

Geocode.setApiKey("AIzaSyD2O8UIsUWU-tbBKE5W5W9CSRxamWLDTnk");
Geocode.setLanguage("en");


const Map = props => {
    const [location, setLocation] = useState({
        lat:0,
        lng:0
    })
    const [eventInfo, setEventInfo] = useState({})
    const K_SIZE = 40;

    const greatPlaceStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_SIZE,
    height: K_SIZE,
    left: -K_SIZE / 2,
    top: -K_SIZE / 2,

    border: '5px solid #f44336',
    borderRadius: K_SIZE,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'pointer'
    };

    const greatPlaceStyleHover = {
        ...greatPlaceStyle,
        border: '5px solid #3f51b5',
        color: '#f44336'
    };    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/event/${props.id}`)
            .then(response => {
                setEventInfo(response.data.results);
                Geocode.fromAddress(response.data.results.address)
                    .then(response => {
                        console.log(response.results)
                        console.log(response.results[0].geometry.location)
                        setLocation(response.results[0].geometry.location)
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    },[props.id]);

    return (
        <>
        <div className="mapInfo">
        <h1 class="display-5">Location</h1>
            <div style={{height:'400px', width:'900px', border:'1px solid black'}}>
            <GoogleMapReact
                apiKey={"AIzaSyD2O8UIsUWU-tbBKE5W5W9CSRxamWLDTnk"}
                defaultCenter={{
                    lat:47.6062,
                    lng:-122.3321
                }}
                defaultZoom={11}
            >
                <div lat={location.lat} lng={location.lng} style={greatPlaceStyle}>
                    
                </div>
            </GoogleMapReact>
            </div>
        </div>
        <div className="descriptionInfo">
            <h2 class="display-6">About this Event:</h2>
            <p>{eventInfo.description}</p>
        </div>
        </>
    )
}

export default Map
