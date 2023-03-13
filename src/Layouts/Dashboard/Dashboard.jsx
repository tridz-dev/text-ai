import {useEffect, useState, useContext} from "react";
import PersistContext from "./../../Context/PersistContext";
import i18n from "i18next";
import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";
import Footer from "./../../components/Footer";
import OnboardModal from "./OnboardModal/OnboardModal";

function Dashboard({children}) {
  const {language}=useContext(PersistContext);
  const [showModal,setShowModal]=useState(false);
  
  useEffect(()=>{
    const onboardModalStatus=localStorage.getItem("onBoardModal");
    if(!onboardModalStatus)
      setShowModal(true);
  },[])

  useEffect(()=>{
    localStorage.setItem("language",language);
    i18n.changeLanguage(language);
    document.querySelector("body").lang=language;
  },[language]);
  
  document.dir=language==="ar"?"rtl":"ltr";
  return (
    <div className="mx-auto flex flex-col">      
    {showModal && <OnboardModal setShowModal={setShowModal}/>}
      <Header/>
      <div id="content" className="grid md:grid-cols-[210px_2fr]">
        <Sidebar />     
        {/* {children?
          (<div className="pt-4 mx-12">{children}</div>):<Content/>} */}
          <div className="pt-3 mx-6 md:pt-4 md:mx-12">
            {children?children:<Content/>}
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
