import { NoteDetails } from "./NoteDetails"
import { Alert } from './Alert';
import { useAuth } from "../store/auth_store";
import { Login } from "./loginPage";
import "../css/notes.css"


export const Notes = ()=>{
    const isLoggedIn = useAuth();
    // console.log("isLoggedIn: ",isLoggedIn.isLoggedIn);

    return(
        // <div className="background">
        <div>
            {
                isLoggedIn.isLoggedIn ? (<>
                    <Alert/>
                    <div>
                        <NoteDetails/>
                    </div>
                </>
                ):(
                    <>
                        <div className="errorBG">
                        <h1>Heyy Please first <a href="/login">login </a>here!!</h1></div>
                    </>
                )
            }   
        </div>
    )
}