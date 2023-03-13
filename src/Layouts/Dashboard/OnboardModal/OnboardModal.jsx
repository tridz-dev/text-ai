import {useTranslation} from "react-i18next";
import Modal from "./../../../components/Modal";
import MainButton from "./../../../components/buttons/MainButton";
import {
    IconMicroscope,
    IconAlertOctagon,
} from "@tabler/icons";


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
                    <MainButton text={t("Done")}
                    onClickHandler={closeModal}/>
                </div>
        </Modal>
    )
}

export default OnboardModal;