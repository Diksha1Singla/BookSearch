import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../context"
import "./Login.css"

const Login = () => {

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();
    const {storetoken} = useAppContext()
    const handleChnage = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();    //prevent page refresh
        try {
            const response = await fetch("http://localhost:5000/login",{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body : JSON.stringify(user),
            })
            if(response.ok){
                const res_data = await response.json();
                // alert("Login Successful")
                // localStorage.setItem("token",res_data.token)    //     M1
                storetoken(res_data.token);      
                setUser({email:"",password:""});
                navigate("/")
            }
        } catch (error) {
            alert("InValid credential")
            console.log(error);
        }
    }
    return(
        <>
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                    <input type="email"  name="email" value={user.email} onChange={handleChnage} id="Email1" required/>

                        <label htmlFor="Email1">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password"  name="password" value={user.password} onChange={handleChnage} id="Password1" required/>
                        <label htmlFor="Password1">Password</label>
                    </div>
                    <div className="button-box">
                        <input type="submit" value="Login"/>
                    </div>
                    <p className="signup-link">Dont have an account? <a href="/register">Sign up</a></p>
                </form>
            </div>
        </div>
           
        </>
    )
}
export default  Login;
