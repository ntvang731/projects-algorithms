import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const CreateService = (props) => {

    const navigate = useNavigate();

    // establishing state for the service object
    const [service, setService] = useState({
        firstName:'',
        lastName:'',
        description:''
    })

    // establishing state for errors as an object
    const [errors, setErrors] = useState({})

    // spread everything in the service object
    // and find the keyname based on the user input [e.target.name]
    // then assign the value from the input field to e.target.value
    const changeHandler = (e) => {
        setService({...service, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newService', service)
            .then((res) => {
                console.log(res);
                // upon successful post when submitting, navigate user to display page
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
            <Link className='underline text-gray-300' to={'/'}>back to request list</Link><br/><br/>
            <h2 className='text-3xl'>Enter New Photography Service Request</h2><br/>
            <div className="border">
                <form onSubmit={submitHandler} className=' max-w-[600px] w-full'>
                    <div>
                        <label>First Name: </label>
                        {/* name must match key in our object (i.e. name)*/}
                        <input className='text-black' type="text" name="firstName" onChange={changeHandler}/>
                        {
                            // ternary operator for displaying error message if it exists
                            // errors.name.message --> errors is from getter state
                            // errors.name.message --> title.message is keyname hierarchy from state (Components)
                            errors.firstName?
                            <p className="validatorError">{errors.firstName.message}</p>:
                            null
                        }
                    </div><br/>
                    <div>
                        <label>Last Name: </label>
                        {/* name must match key in our object (i.e. name)*/}
                        <input className='text-black' type="text" name="lastName" onChange={changeHandler}/>
                        {
                            // ternary operator for displaying error message if it exists
                            // errors.name.message --> errors is from getter state
                            // errors.name.message --> title.message is keyname hierarchy from state (Components)
                            errors.lastName?
                            <p className="validatorError">{errors.lastName.message}</p>:
                            null
                        }
                    </div><br/>
                    <div>
                        <label>Description: </label>
                        <textarea className='text-black' name="description" onChange={changeHandler} rows='10' placeholder='Please describe photography service. Provide location, time, and date.'></textarea>
                        {
                            errors.description?
                            <p className="validatorError">{errors.description.message}</p>:
                            null
                        }
                    </div>
                    <button className="buttonStyle">Add Request</button>
                </form>
            </div>
        </div>
    )
}

export default CreateService;