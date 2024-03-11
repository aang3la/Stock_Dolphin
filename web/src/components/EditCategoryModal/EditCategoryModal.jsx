import add_image from "../../images/add-image.png";
import close from "../../images/close.png";

const EditCategoryModal = ({ categoryData, heading, btnName, handleEditCategory, closeModal, onChange, handleFileChange }) => {  
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
                name="title"
                value={categoryData.title}
                onChange={onChange}                
                required
              />
              <hr id="custom_hr" />
            </div>
            <hr />
            <div className="img-container">
            <div className="modal-image">
                <label htmlFor="photo-upload" className="photo-upload-label">
                <img src={add_image} />
                </label>
                <input
                type="file"
                id="photo-upload"
                accept="image/*" 
                onChange={handleFileChange}
                />
                <p>(Add Photo, 2MB Total)</p>
            </div>
            </div>
            <hr />
          </div>
          <div className="modal-footer">
            <button id="cancel-btn" onClick={() => closeModal(false)}>
              CANCEL
            </button>
            <button id="add-btn" onClick={handleEditCategory}>
              {btnName}
            </button>
          </div>
        </dialog>
      </div>
    );
  };
  
  export default EditCategoryModal;