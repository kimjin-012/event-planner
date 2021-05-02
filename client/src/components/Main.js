import React, {useState, useEffect} from 'react';
import {navigate, Link} from '@reach/router';
import axios from 'axios';

const Main = props => {
    const [allEvent, setAllEvent] = useState([]);
    const {changes, setChange} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/event')
            .then(response => {
                setAllEvent(response.data.results);
                setChange(null);
            })
            .catch(err => console.log(err))
    },[changes])

    return (
        <>
        <div className="eventList">
            <h2>List of Events</h2>
            <div className="list-group">
                {
                    allEvent.map((event, i) => 
                    <Link key={i} to={`/event/${event._id}`}><button type="button" className="btn btn-outline-secondary">{event.name}</button></Link>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Main