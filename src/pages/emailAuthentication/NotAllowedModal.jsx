import MainButton from "../../components/buttons/MainButton";
import Modal from "./../../components/Modal";

function NotAllowedModal({closeModal}){
    return(
        <Modal>
            <h1 className="text-2xl font-bold tracking-wide text-slate-900 pb-3 border-b-2">Access Denied</h1>
            <p className="text-md my-4">We're sorry, but access to this website is currently restricted to a select group of users as we are still in the beta testing phase. We apologize for any inconvenience this may cause and appreciate your interest in our website.</p>
            <MainButton text="OK"
            onClickHandler={()=>closeModal(true)}/>
        </Modal>
    );
}

export default NotAllowedModal;