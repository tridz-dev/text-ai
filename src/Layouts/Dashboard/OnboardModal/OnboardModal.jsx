import {useTranslation} from "react-i18next";
import {useState} from "react";
import ReactModal from "react-modal";
import {
    IconWand,
    Icon3dCubeSphere
} from "@tabler/icons";


function OnboardModal(){
    ReactModal.setAppElement("#root");
    const {t}=useTranslation();
    const [showModal,setShowModal]=useState(true);    
    return(
        <ReactModal isOpen={showModal}
        overlayClassName="fixed inset-0 bg-slate-500/50"
        className="absolute md:inset-x-96 md:inset-y-40 bg-white outline-none overflow-auto">
            <div className="p-3">
                <div className="p-5 border rounded-lg border-dashed">
                <h1 className="text-2xl font-bold tracking-wide text-slate-900 pb-3 border-b-2">{t("Imagine")}</h1>
                <div className="py-3 flex my-4 bg-nav-blue items-center">
                       <IconWand size={24} className="mx-4 my-2"/>
                       <p>You can ask to generate anything</p>
                </div>
                <div className="py-3 flex my-4 bg-nav-blue items-center">
                        <Icon3dCubeSphere size={24} className="mx-4 my-2"/>
                        <p>Write in your letter, essay or anything and get grammar correct</p>
                </div>
                <div className="flex justify-end">
                    <button onClick={()=>setShowModal(false)} className="rounded-md border border-transparent bg-slate-900 px-4 leading-8 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                        {t("Next")}
                    </button>
                </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default OnboardModal;