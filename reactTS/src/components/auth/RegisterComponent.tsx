import {useState} from "react"
import {useNavigate} from "react-router-dom";
import UserService from "../services/front/UserService.tsx";

function RegisterComponent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try{
            const token = localStorage.getItem('token')
            if (token == null){
                console.log("gg")
            }
            await UserService.register(formData,token);
            setFormData({
                name:'',
                email:'',
                password:''
            });
            alert('User registered successfully')
            navigate('/admin/users')
        } catch (error){
            console.log('Error registering user: ', error)
            alert('An error occurred while registering user')
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
                                </div>
                                <div className="frm-action">
                                    <div className="input-box tci-box">
                                        <a onClick={handleSubmit} className="btn-def btn2">Register</a>
                                    </div>
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


