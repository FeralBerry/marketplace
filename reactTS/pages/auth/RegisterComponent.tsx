import {useContext, useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {AppContext} from "../../context/AppContext.tsx";
import {toast} from "react-toastify";

function RegisterComponent() {
    const [loading,setLoading] = useState(false);
    const [confirm_password_error,setConfirm_password_error] = useState("");
    // @ts-ignore
    const {backendUrl} = useContext(AppContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        setLoading(true);

        try{
            if(formData.password == formData.confirm_password){
                const name = formData.name
                const email = formData.email
                const password = formData.password
                if(password.length < 6){
                    setConfirm_password_error("The password must be at least 6 characters long");
                    setTimeout(() => {
                        setConfirm_password_error("")
                    },5000)
                } else {
                    await axios.post(`${backendUrl}/register`,{name,email,password}).then((res) => {
                        if(res.status === 201){
                            navigate("/")
                            toast.success("Account created successfully.")
                        } else {
                            toast.error("Email already exists.")
                        }
                    });
                }
            } else {
                setConfirm_password_error("Passwords don't match");
                setTimeout(() => {
                    setConfirm_password_error("")
                },5000)
            }
        } catch (error){
            // @ts-ignore
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="account-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-offset-3 col-sm-6 col-xs-12 lr2">
                            <form>
                                <div className="login-reg">
                                    <h3>Register</h3>
                                    <div className="input-box mb-20">
                                        <label className="control-label">Name</label>
                                        <input type="text" className="info" placeholder="Name" value={formData.name} onChange={handleInputChange}
                                               required name="name"/>
                                    </div>
                                    <div className="input-box mb-20">
                                        <label className="control-label">E-Mail</label>
                                        <input type="email" className="info" placeholder="E-Mail" value={formData.email} onChange={handleInputChange}
                                               required name="email"/>
                                    </div>
                                    <div className="input-box">
                                        <label className="control-label">Password</label>
                                        <input type="password" className="info" placeholder="Password" value={formData.password} onChange={handleInputChange}
                                               required name="password"/>
                                    </div>
                                    {confirm_password_error && <span style={{color:"red"}}>{confirm_password_error}</span>}
                                    <div className="input-box">
                                        <label className="control-label">Confirm password</label>
                                        <input type="password" className="info" placeholder="Confirm password" onChange={handleInputChange}
                                               required name="confirm_password"/>
                                    </div>
                                </div>
                                <div className="frm-action">
                                    <div className="input-box tci-box">
                                        {loading ?
                                            (
                                                <a onClick={handleSubmit} className="btn-def btn2" disabled>Loading...</a>
                                            ) :
                                            (
                                                <a onClick={handleSubmit}
                                                   className="btn-def btn2">Register</a>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    Already have an account?
                                    <span className="text-decoration-underline" style={{cursor: "pointer"}}>
                                        <Link className="change-auth" to="/login">  Login here</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent


