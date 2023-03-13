import {useState} from "react";
import NotAllowedModal from "./NotAllowedModal";
import MainButton from "./../../components/buttons/MainButton";
import availableEmails from "./../../email.json";
import {IconAlertOctagon} from "@tabler/icons";
function EmailAuthentication({setLoggedIn}){
    const [access,setAccess]=useState(true);
    const [invalidEmail,setInvalidEmail]=useState(false);
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    function login(e){
        e.preventDefault();
        const email=document.querySelector("#emailInput").value;
        const emailIs=availableEmails.includes(email);
        if(emailRegex.test(email)){
            // localStorage.setItem("email",email);
            emailIs?setLoggedIn(email):setAccess(false);
            setInvalidEmail(false);
            return;
        }
        setInvalidEmail(true);
    }
    if(!access)
        return <NotAllowedModal closeModal={setAccess}/>
    return(
        <form className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-4/5 sm:w-3/5 md:1/3 lg:w-1/3">
                {invalidEmail && (<div className="mb-4 rounded-lg bg-red-100 py-2 px-6 text-base text-red-800 flex"
                role="alert">
                    <IconAlertOctagon className="mr-3"/>
                    <span>Please enter a valid email address</span>
                </div>)}
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