import React, {useState} from 'react'
import {navigate, Link} from '@reach/router'
import axios from 'axios';

const AddEvent = props => {
    const [eventInfo, setEventInfo] = useState({
        name:"",
        address:"",
        description:""
    });
    const [errors, setErrors] = useState({});
    const {setChange} = props;

    const changeHandler = e => {
        setEventInfo({
            ...eventInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/event/create", eventInfo)
            .then(response => {
                if(response.data.message === 'error'){
                    setErrors(response.data.errors);
                } else {
                    setErrors({});
                    setEventInfo({
                        name:"",
                        address:""
                    });
                    setChange(1);
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
        <h1>Create an Event!</h1>
        {
            errors.name ?
            <p className="errorMessage">{errors.name.message}</p>
            :
            ''
        }
        {
            errors.address ?
            <p className="errorMessage">{errors.address.message}</p>
            :
            ''
        }
        <form className="form-group" onSubmit={submitHandler}>
        <label htmlFor="name">Event Name:</label>
        <input className="form-control" type="text" name="name" onChange={changeHandler}/>
        <small id="nameHelp" className="form-text text-muted">Please enter the Event's name</small>
        <br/>
        <label htmlFor="address">Address:</label>
        <input className="form-control" type="text" name="address" onChange={changeHandler}/>
        <small id="addressHelp" className="form-text text-muted">Please enter the location/address name</small>
        <br/>
        <label htmlFor="description">Description:</label>
        {/* <input className="largerbox form-control" type="text" name="description" onChange={changeHandler}/> */}
        <textarea className="form-control" name="description" id="description" cols="30" rows="5" onChange={changeHandler}></textarea>
        <small id="descriptionHelp" className="form-text text-muted">What's this event about?</small>
        <br/>
        <button class="btn btn-success" type="submit">Submit</button>
        <Link to="/"><button class="btn btn-warning">Cancel</button></Link>
        </form>
        </>
    )
}

export default AddEvent
