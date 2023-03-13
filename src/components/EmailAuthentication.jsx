function EmailAuthentication({setLoggedIn}){
    function login(){
        const email=document.querySelector("#emailInput").value;
        if(email){
            localStorage.setItem("email",email);
            setLoggedIn(email);
        }
    }
    return(
        <div>
            <input type="email" id="emailInput"/>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default EmailAuthentication;