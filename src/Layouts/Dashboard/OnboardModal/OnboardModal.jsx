import {useTranslation} from "react-i18next";
// import {useState} from "react";
import ReactModal from "react-modal";
import {
    IconMicroscope,
    IconAlertOctagon,
} from "@tabler/icons";


function OnboardModal({setShowModal}){
    ReactModal.setAppElement("#root");
    const {t}=useTranslation();
    // const [showModal,setShowModal]=useState(true);    
    return(
        <ReactModal isOpen={true}
        overlayClassName="fixed inset-0 bg-slate-500/50"
        className="absolute inset-x-4 inset-y-16 sm:inset-y-24 md:inset-x-32 md:inset-y-28 lg:inset-x-72 bg-white outline-none  h-fit">
            <div className="p-3">
                <div className="p-5 border rounded-lg border-dashed">
                <h1 className="text-2xl font-bold tracking-wide text-slate-900 pb-3 border-b-2">{t("Important")}</h1>
                <p className="my-2 text-lg font-semibold">{t("Beta Preview")}</p>
                <div className="py-3 pr-2 flex my-4 bg-nav-blue items-center">
                    <span className="min-w-fit">
                        <IconMicroscope size={24} className="mx-4 my-2"/>
                    </span>
                    <p className="text-sm">{t("Our Goal")}</p>
                </div>
                <div className="py-3 pr-2 flex my-4 bg-nav-blue items-center">
                    <span className="min-w-fit">
                        <IconAlertOctagon size={24} className="mx-4 my-2"/>
                    </span>
                    <p className="text-sm">{t("Modal Warning")}</p>
                </div>
                <div className="flex justify-end">
                    <button onClick={()=>setShowModal(false)} 
                    className="rounded-md border border-transparent bg-slate-900 px-4 leading-8 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                        {t("Done")}
                    </button>
                </div>
                </div>
            </div>
        </ReactModal>
    )
}

export default OnboardModal;