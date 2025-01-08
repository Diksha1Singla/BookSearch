import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../context"

const Register = () =>{

    const [user,setUser] = useState({
        username:"",
        email:"",
        RollNo:"",
        password:""
    })

    const navigate = useNavigate();
    const {storetoken} = useAppContext()
    const handleChnage = (e)=>{
        let name = e.target.name
        let value = e.target.value;

        setUser({
            ...user,               //to prevent previous user   
            [name] : value          // dynamic data
        });
        
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();    //prevent page refresh

        try {
            const response = await fetch("http://localhost:5000/register",{
                method:'POST',
                headers:{
                    'Content-Type' : "application/json"
                },
                body:JSON.stringify(user)
            })
            // console.log(response);
            if(response.ok){
                const res_data = await response.json();
                // localStorage.setItem("token",res_data.token)        problem in it is we have to define it multiple times whenever we need to generate token easy is to create function
                alert("Registeration successfull")
                storetoken(res_data.token);      
                setUser({
                    username:"",
                    email:"",
                    RollNo:"",
                    password:""
                })
                navigate("/")
            }
            else{
                alert("Registration failed!User Exist")
            }
        } catch (error) {
            // alert("Registration failed!!")
            console.log(error)
        }
    }

    return(
        <>
        <div className="login-container">
                <div className="login-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="username"  name="username" value={user.username} onChange={handleChnage} id="username1" required/>
                            <label htmlFor="username">UserName</label>
                        </div>
                        <div className="input-box">
                            <input type="email"  name="email" value={user.email} onChange={handleChnage} id="Email1" required/>
                            <label htmlFor="Email1">Email</label>
                        </div>
                        <div className="input-box">
                            <input type="password"  name="password" value={user.password} onChange={handleChnage} id="Password1" required/>
                            <label htmlFor="Password1">Password</label>
                        </div>
                        <div className="input-box">
                            <input type="string"  name="RollNo" value={user.RollNo} onChange={handleChnage} id="Phone1"/>
                            <label htmlFor="Phone1">RollNo</label>
                        </div>

                        <div className="button-box">
                            <input type="submit" value="Register"/>
                        </div>
                        <p className="signup-link">Already have an account? <a href="/login">Sign In</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register