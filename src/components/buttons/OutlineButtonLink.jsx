import {Link} from "react-router-dom";
import PersistContext from "./../../Context/PersistContext";
import { useContext } from "react";

function OutlineButtonLink({to,text,write,suggest,explain,imagine}){
    const {language}=useContext(PersistContext);
    return(
        <Link to={to}
        className="w-full max-w-xs md:w-40 md:mx-1 my-2 inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
            <span className="w-8 md:w-fit md:mr-1 self-center">
            {write && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wand" width="20" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 21l15 -15l-3 -3l-15 15l3 3"></path>
                    <path d="M15 6l3 3"></path>
                    <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                    <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                  </svg>)}
            {suggest && (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 17.6l-2 -1.1v-2.5"></path>
                    <path d="M4 10v-2.5l2 -1.1"></path>
                    <path d="M10 4.1l2 -1.1l2 1.1"></path>
                    <path d="M18 6.4l2 1.1v2.5"></path>
                    <path d="M20 14v2.5l-2 1.12"></path>
                    <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                    <path d="M12 12l2 -1.1"></path>
                    <path d="M18 8.6l2 -1.1"></path>
                    <path d="M12 12l0 2.5"></path>
                    <path d="M12 18.5l0 2.5"></path>
                    <path d="M12 12l-2 -1.12"></path>
                    <path d="M6 8.6l-2 -1.1"></path>
                </svg>)
            }
            {explain && (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                </svg>
            )}
            {imagine && (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crystal-ball" width="20" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6.73 17.018a8 8 0 1 1 10.54 0"></path>
                    <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z"></path>
                    <path d="M11 7a3 3 0 0 0 -3 3"></path>
                </svg>
            )}
            </span>
            <span className={`${language==="ar"?"w-28":"w-20"} md:w-fit text-start self-center`}>{text}</span>
        </Link>);
}

export default OutlineButtonLink;