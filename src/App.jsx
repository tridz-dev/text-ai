import { useState, useEffect,useContext } from "react";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Write from "./pages/write/Write";
import Analyze from "./pages/analyze/Analyze";
import Imagine from "./pages/imagine/Imagine";
import Explain from "./pages/explain/Explain";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import Gate from "./components/Gate";
import { onAuthStateChanged,auth,db } from "./firebase";
import {doc,getDoc} from "firebase/firestore";
import PersistContext from "./Context/PersistContext";

function App() {

  const {user,setUser}=useContext(PersistContext);
  const [loading,setLoading]=useState(true);
  let notBeta=false;
  useEffect(()=>{
      onAuthStateChanged(auth,(googleUser)=>{
        googleUser && setUser(googleUser.email);
        // if(googleUser){
        //   setUser(googleUser.email);
        // }
      });
      fetchFirebase();
  },[user]);

  async function fetchFirebase(){
    console.log(user);
    const docRef=doc(db,"beta-email","beta-email");
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
      const userAccess=docSnap.data().emailId.includes(user);
      notBeta=userAccess;
      setLoading(false);
    }
  }
  
  if(loading)
    return <LoadingScreen text={"Initializing ..."}/>
  
  if(!user || notBeta)
  {
    return (
    <>
      {console.log("You do not have access yet")}
      <Gate/>
    </>
    )
  }
  
    return (
      <Routes>
        <Route path="/" element={
          <Dashboard></Dashboard>
        }/>
        {/* <Route path="/dashboard" element={
          <Dashboard></Dashboard>
        }/> */}
        <Route path="/write" element={
          <Dashboard><Write/></Dashboard>
        }/>
        <Route path="/analyze" element={
          <Dashboard><Analyze/></Dashboard>
        }/>
        <Route path="/explain" element={
          <Dashboard><Explain/></Dashboard>
        }/>
        <Route path="/imagine" element={
            <Dashboard><Imagine/></Dashboard>
        }/>
        <Route path="/history" element={
          <Dashboard>History</Dashboard>
        }/>
        <Route path="/settings" element={
          <Dashboard>Settings</Dashboard>
        }/>
      </Routes>
    );
}

export default App;
