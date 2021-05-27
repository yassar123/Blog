import React ,{useEffect, useState} from 'react'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default function (props) {

    const [userData, setData] = useState(null);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then((buffer) => buffer.text())
        .then((stringResponse) => JSON.parse(stringResponse))
        .then((users) => setData(users));
        
    }, []);
    return (
        <div style={{display:"flex",margin:"10%",justifyContent:"center"}}>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                {userData && userData.map((userData,index) => (
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{userData.username}</td>
                        <td>{userData.company.name}</td>
                        <td>
                            <Link to={"/posts?userId=" + userData.id}>Posts</Link>
                            </td>
                    </tr>
                ))}
                
            </tbody>
        </Table>
        </div>
    );
}


