import {useState} from "react";
import {IconLayoutSidebarLeftExpand} from "@tabler/icons";
import { NavVertical } from "../Nav";
const Menu=()=>{
    const [display,setDisplay]=useState(false);
    return (
    <div className="md:hidden">
        <IconLayoutSidebarLeftExpand 
        className="md:hidden hover:cursor-pointer" 
        width="32" 
        height="32"
        onClick={()=>setDisplay((currentState)=>!currentState)}/>
        {display && (<div className="bg-white absolute top-14 p-5 w-80 drop-shadow-xl">
            <NavVertical/>
        </div>)}
        {/* <HamburgerMenu>
            <NavVertical/>
        </HamburgerMenu> */}
    </div>);
}

export default Menu;