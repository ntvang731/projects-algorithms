import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const EditService = (props) => {

    const navigate = useNavigate();

    // grabs the id from the url
    const {id} = useParams()

    const [service, setService] = useState({
        firstName:'',
        lastName:'',
        description:''
    })

    // establishing state for errors as an object
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setService({...service, [e.target.name]:e.target.value})
    }

    // find the service to update
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneService/${id}`)
            .then((res) => {
                console.log(res.data.service);
                setService(res.data.service);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateService/${id}`, service)
            .then((res) => {
                console.log(res);
                setService(res.data.service);
                navigate('/')
            })
            .catch((err) => {
                // response.data.errors is keyname hierarchy shown in Console
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='w-full h-screen bg-[#0a192f] justify-center items-center p-4 text-gray-300'>
            <Link className='underline' to={'/'}>back to request list</Link><br/><br/>
            <h2 className='text-3xl'>Edit Service Request</h2><br/>
            <div className="border">
                <form onSubmit={submitHandler}>
                    <div>
                        <label>First Name: </label>
                        <input className='text-black' type="text" name="firstName" onChange={changeHandler} value={service.firstName}/>
                        {
                            errors.firstName?
                            <p className="validatorError">{errors.firstName.message}</p>:
                            null
                        }
                    </div><br/>
                    <div>
                        <label>Last Name: </label>
                        <input className='text-black' type="text" name="lastName" onChange={changeHandler} value={service.lastName}/>
                        {
                            errors.lastName?
                            <p className="validatorError">{errors.lastName.message}</p>:
                            null
                        }
                    </div><br/>
                    <div>
                        <label>Description: </label>
                        <textarea className='text-black' name="description" onChange={changeHandler} rows='10' value={service.description}></textarea>
                        {
                            errors.description?
                            <p className="validatorError">{errors.type.message}</p>:
                            null
                        }
                    </div><br/>
                    <button className="buttonStyle">Edit Service</button>
                </form>
            </div>
        </div>
    )
}

export default EditService;