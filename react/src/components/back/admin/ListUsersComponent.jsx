import React, {useState,useEffect} from "react";
import {deleteUser, listUsers} from "../../../services/back/admin/UsersServices.js";
import {useNavigate} from "react-router-dom";

const ListUsersComponent = () => {
    const [usersData,setUsersData] = useState([])

    const navigator = useNavigate();
    useEffect(() => {
        getAllUsers();
    },[])
    function getAllUsers(){
        listUsers().then((res) => {
            setUsersData(res.data);
        }).catch(error => {
            console.error(error)
        })
    }
    function addNewUser(){
        navigator("/add-user")
    }
    function updateUser(id){
        navigator(`/edit-user/${id}`)
    }
    function removeUser(id){
        deleteUser(id)
            .then(res => {
                getAllUsers();
            }).catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container">
            <h2>List of Users</h2>
            <button className="btn btn-primary mb-2" onClick={addNewUser}>Add User</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    usersData.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => updateUser(user.id)} className="btn btn-info">Update</button>
                            <button onClick={() => removeUser(user.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}
export default ListUsersComponent