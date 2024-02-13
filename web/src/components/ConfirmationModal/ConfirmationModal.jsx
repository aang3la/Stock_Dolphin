import "./confirmationModal.css";

const ConfirmationModal = ({ content, content2, buttonName, closeModal, handleConfirm }) => {
  return (
    <div className="overlay-container">
    <dialog open className="confirmation-modal">
      <div>
        <div className="confModal-content">
          <p>{content}</p>
          <p>{content2}</p>
        </div>
        <div className="confModal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>CANCEL</button>
          <button id="confirm-btn" onClick={handleConfirm}>{buttonName}</button>
        </div>
      </div>
    </dialog>
    </div>
  );
};

export default ConfirmationModal;
