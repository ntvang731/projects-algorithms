import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const OneService = (props) => {

    const navigate = useNavigate();

    // state will allow us to get and set the service object
    // the getter will grab the service object data for displaying
    const [service, setService] = useState({})

    // grabs the id from the url
    const {id} = useParams()
    console.log(id);

    // general setup for useEffect
    // useEffect(() => {},[])
    useEffect(() => {
        // use backticks to inject a variable
        // id is the data we grabbed via useParams() and stored as const {id}
        axios.get(`http://localhost:8000/api/oneService/${id}`)
            .then((res) => {
                // use console log to test whether the appropriate data is being retrieved
                // if successfully retrieved, then set the data (e.g. setService(res.data.service))
                // console.log(res);
                console.log(res.data.service);
                setService(res.data.service);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteService/${id}`)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Link to={'/'}>back to home</Link><br/><br/>
                {/* service.name --> show is the getter from useState */}
                {/* service.name --> title is the keyname */}
                <h2>Service Request Details</h2>
            <div className="border">
                <h3>Requested By: {service.firstName} {service.lastName}</h3>
                <h3>Description: {service.description}</h3>
            </div><br/>
            <button className="buttonStyleRed" onClick={() => deleteHandler(service._id)}>Service Completed</button>
        </div>
    )
}

export default OneService;