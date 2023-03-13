import {useState} from "react";
import NotAllowedModal from "./NotAllowedModal";
import MainButton from "./../../components/buttons/MainButton";
import availableEmails from "./../../email.json";
function EmailAuthentication({setLoggedIn}){
    const [access,setAccess]=useState(true);
    function login(e){
        e.preventDefault();
        const email=document.querySelector("#emailInput").value;
        const emailIs=availableEmails.includes(email);
        if(email){
            // localStorage.setItem("email",email);
            emailIs?setLoggedIn(email):setAccess(false);
        }
    }
    if(!access)
        return <NotAllowedModal closeModal={setAccess}/>
    return(
        <form className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-4/5 sm:w-3/5 md:1/3 lg:w-1/3">
                <label className="block mb-2 text-xl text-slate-900 font-bold" htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput"
                className="w-full border rounded-lg border-dashed border-slate-400 focus:border-black focus:ring-0"/>
            
                <MainButton text="Login"
                onClickHandler={(e)=>login(e)}
                className="mt-2"/>
            </div>
        </form>
    );
}

export default EmailAuthentication;