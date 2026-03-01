import React, {useEffect, useState} from "react";
import {createUser, getUser, updateUser} from "../../../services/back/admin/UsersServices.js";
import {useNavigate, useParams} from "react-router-dom";

const ListUsersComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {id} = useParams();
    const [errors,setErrors] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigator = useNavigate();

    useEffect(() => {
        return () => {
            if(id){
                getUser(id)
                    .then((res) => {
                        setName(res.data.name)
                        setEmail(res.data.email)
                        setPassword(res.data.password)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        };
    }, [id]);

    
    function saveOrUpdateUser(e){
        e.preventDefault();
        if(validateForm()){
            const user = {name,email,password}
            if(id){
                updateUser(id, user)
                    .then((res) => {
                        console.log(res.data)
                        navigator('/')
                    }).catch((error) => {
                        console.error(error)
                    })
            } else {
                createUser(user).then((res) => {
                    console.log(res.data)
                    navigator('/')
                }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors}
        if(name.trim()){
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        if(password.trim()){
            errorsCopy.password = '';
        } else {
            errorsCopy.password = 'Password is required';
            valid = false;
        }
        setErrors(errorsCopy);

        return valid;
    }
    function pageTitle(){
        if(id){
            return <h2 className="text-center">Update User</h2>
        } else {
            return <h2 className="text-center">Add User</h2>
        }
    }
    return (
        <div className="container">
            <br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    name="name"
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid': ''}`}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                >

                                </input>
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                >

                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    name="password"
                                    value={password}
                                    className={`form-control ${errors.password ? 'is-invalid': ''}`}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                >
                                </input>
                                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                            </div>
                            <button onClick={saveOrUpdateUser} className="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListUsersComponent