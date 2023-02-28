import {useState} from "react";
import Header from "./../../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./../../components/Content";

function Dashboard({children}) {
  const [language,setLanguage]=useState("en");
  sessionStorage.setItem("language",language);
  document.dir=language==="ar"?"rtl":"ltr";
  return (
    <div className="mx-auto flex flex-col space-y-6">      
      <Header setDirection={setLanguage}/>
      <div id="content" className="grid gap-12 md:grid-cols-[210px_2fr]">                
        <Sidebar />        
        {children?children:<Content/>}
      </div>
      
    </div>
  );
}

export default Dashboard;
