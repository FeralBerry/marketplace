import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {AppContext} from "../../context/AppContext.tsx";
import {toast} from "react-toastify";

function LoginComponent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    // @ts-ignore
    const {backendUrl,setIsLoggedIn,getUserData} = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        axios.defaults.withCredentials = true;
        setLoading(true);
        try{
            await axios.post(`${backendUrl}/login`,{email,password})
                .then(() => {
                    setIsLoggedIn(true)
                    //TODO redirect to dashboard
                    navigate("/")
                    getUserData()
                    toast.success("Authenticated success")
                })
                .catch((error) => {
                    toast.error("Error: " + error.status + " Email or password incorrect")
                })
        } catch (error){
            console.log(error)
        }
    }
    return (
        <div className="account-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-6 col-xs-12">
                        <form className="login-side">
                            <div className="login-reg">
                                <h3>Login</h3>
                                <div className="input-box mb-20">
                                    <label className="control-label">E-Mail</label>
                                    <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} name="email"
                                           className="info"/>
                                </div>
                                <div className="input-box">
                                    <label className="control-label">Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"
                                           className="info"/>
                                </div>
                            </div>
                            <div className="frm-action">
                                <div className="input-box tci-box">
                                    {loading ?
                                    (
                                        <>
                                            <a onClick={handleSubmit} className="btn-def btn2">Login</a>
                                        </>
                                    ):
                                    (
                                        <>
                                            <a className="btn-def btn2">Loading...</a>
                                        </>
                                    )
                                    }

                                </div>
                                <span>
                         <input className="remr" type="checkbox"/> Remember me
                     </span>
                                <Link to="/reset-password" className="forgotten forg">Forgotten Password</Link>
                            </div>
                        </form>
                        <div className="text-center mt-3">
                            Don't have an account?
                            <span className="text-decoration-underline" style={{cursor: "pointer"}}>
                                <Link className="change-auth" to="/register">  Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent