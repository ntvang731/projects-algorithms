import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import dateFormat from 'dateformat';

const Display = (props) => {

    const {serviceList, setServiceList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allServices')
            .then((res) => {
            console.log(res);
            setServiceList(res.data.services)
            })
            .catch((err) => {
            console.log(err);
            })
    },[])

    return (
        <div>
            <Link to={'/services/new'}>enter a new service request</Link>
            <h2>Service Requests</h2>
            <table className="serviceTable">
                <tr>
                    <th>Client Name</th>
                    <th>Requested On</th>
                    <th>Actions</th>
                </tr>
            </table>
            {
                serviceList.map((oneService) => (
                    // each prop child should have its own key
                    <div key={oneService._id}>
                        <table className="serviceTable">
                            <tr>
                                <td>{oneService.firstName} {oneService.lastName}</td>
                                <td>{dateFormat(oneService.createdAt, 'dddd, mmmm dS, yyyy @ hh:mm:ss')}</td>
                                <td><Link to={`/services/${oneService._id}`}>details</Link> | <Link to={`/services/${oneService._id}/edit`}>edit</Link></td>
                            </tr>
                        </table>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;