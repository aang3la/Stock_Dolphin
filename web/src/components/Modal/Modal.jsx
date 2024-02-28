import add_image from "../../images/add-image.png";
import close from "../../images/close.png";
import "./modal.css"
import { useState } from "react";;

const Modal = ({
  heading,
  closeModal,
  btnName,
  callbackAction,
  data,
  modalFor,
  onChange
}) => {
  const [file, setFile] = useState();

  return (
    <div className="overlay-container">
      <dialog open>
        <div className="modal-title">
          <h1>{heading}</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name*"
              name={modalFor == 'category' ? "title" : "name"}
              value={modalFor == 'category' ? data.title : data.name}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <hr />
          <div className="img-container">
            <div className="modal-image">
              <label htmlFor="img-upload" className="img-upload-label">
                <img src={add_image} />
              </label>
              <input type="file" id="img-upload" onChange={(e) => setFile(e.target.files[0]) } />
              <p>(Add Photo, 2MB Total)</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="modal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn" onClick={callbackAction}>
            {btnName}
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
