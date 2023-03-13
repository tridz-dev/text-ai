import ReactModal from "react-modal";

function NotAllowedModal(){
    ReactModal.setAppElement("#root");
    return(
        <ReactModal isOpen={true}
        overlayClassName="fixed inset-0 bg-slate-500/50"
        className="absolute inset-x-4 inset-y-16 sm:inset-y-24 md:inset-x-32 md:inset-y-28 lg:inset-x-72 bg-white outline-none  h-fit">
        
        </ReactModal>
    );
}

export default NotAllowedModal;