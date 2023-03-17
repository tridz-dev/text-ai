import {useTranslation} from "react-i18next";
import Modal from "./../../../components/Modal";
import MainButton from "./../../../components/buttons/MainButton";


function OnboardModal({setShowModal}){
    const {t}=useTranslation();
    function closeModal(){
        localStorage.setItem("onBoardModal",true);
        setShowModal(false);
    }
    return(
        <Modal>
            <h1 className="text-2xl font-bold tracking-wide text-slate-900 pb-3 border-b-2">{t("Important")}</h1>
                <p className="my-2 text-lg font-semibold">{t("Beta Preview")}</p>
                <div className="py-3 pr-2 flex my-4 bg-nav-blue items-center">
                    <span className="min-w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 my-2 icon icon-tabler icon-tabler-microscope" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 21h14"></path>
                            <path d="M6 18h2"></path>
                            <path d="M7 18v3"></path>
                            <path d="M9 11l3 3l6 -6l-3 -3z"></path>
                            <path d="M10.5 12.5l-1.5 1.5"></path>
                            <path d="M17 3l3 3"></path>
                            <path d="M12 21a6 6 0 0 0 3.715 -10.712"></path>
                        </svg>
                    </span>
                    <p className="text-sm">{t("Our Goal")}</p>
                </div>
                <div className="py-3 pr-2 flex my-4 bg-nav-blue items-center">
                    <span className="min-w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 my-2 icon icon-tabler icon-tabler-alert-octagon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9.103 2h5.794a3 3 0 0 1 2.122 .879l4.101 4.1a3 3 0 0 1 .88 2.125v5.794a3 3 0 0 1 -.879 2.122l-4.1 4.101a3 3 0 0 1 -2.123 .88h-5.795a3 3 0 0 1 -2.122 -.88l-4.101 -4.1a3 3 0 0 1 -.88 -2.124v-5.794a3 3 0 0 1 .879 -2.122l4.1 -4.101a3 3 0 0 1 2.125 -.88z"></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                        </svg>
                    </span>
                    <p className="text-sm">{t("Modal Warning")}</p>
                </div>
                <div className="flex justify-end">
                    <MainButton text={t("Done")}
                    onClickHandler={closeModal}/>
                </div>
        </Modal>
    )
}

export default OnboardModal;