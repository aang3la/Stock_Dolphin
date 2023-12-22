// import "./ConfirmationModal.css";

const ConfirmationModal = ({ content, buttonName, closeModal }) => {
  return (
    <dialog open>
      <div className="confirmation-modal">
        <div className="confModal-content">
          <p>{content}</p>
        </div>
        <div className="confModal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>CANCEL</button>
          <button id="confirm-btn">{buttonName}</button>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
