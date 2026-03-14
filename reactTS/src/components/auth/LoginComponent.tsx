import {useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../services/front/UserService.tsx";

function LoginComponent() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        try{
            const userData = await UserService.login(email,password)
            if(userData.token){
                localStorage.setItem('token',userData.token)
                localStorage.setItem('role',userData.role)
                navigate("/profile")
            } else {
                setError(userData.error)
            }
        } catch (error){
            console.log(error.message)
            setError(error.message);
            setTimeout(() => {
                setError('')
            },5000);
        }
    }
    return (
        <div className="account-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-6 col-xs-12">
                        <form onSubmit={handleSubmit} className="login-side">
                            <div className="login-reg">
                                <h3>Login</h3>
                                {error && <p className="error-message">{error}</p>}
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
                                    <a type="submit" className="btn-def btn2">Login</a>
                                </div>
                                <span>
                         <input className="remr" type="checkbox"/> Remember me
                     </span>
                                <a href="#" className="forgotten forg">Forgotten Password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent