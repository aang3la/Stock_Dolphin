import "./editSupplierModal.css";
import { useContext, useState } from "react";
import { Context } from "../../uttils/FetchContextProvider";
import close from "../../images/close.png";


const EditSupplierModal = ({ closeModal, supplier }) => {
  const { suppliers, setSuppliers } = useContext(Context);
  const [data, setData] = useState({
    name: supplier.name,
    address: supplier.address,
    phone: supplier.phone,
    email: supplier.email,
  });

  const onChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEditSupplier = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `http://127.0.0.1:10001/suppliers/${supplier._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Response:", response);
      if (response.ok) {
        closeModal(false);
        const updatedSupplierList = suppliers.map((sup) =>
          sup._id === supplier._id ? { ...sup, ...data } : sup
        );
        setSuppliers(updatedSupplierList);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error editing supplier.");
    }
  };

  return (
    <div className="overlay-container">
      <dialog open className="edit-supplier-dialog">
        <div className="modal-title">
          <h1>Edit Supplier</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={data.name}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Address*"
              name="address"
              value={data.address}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Phone Number*"
              name="phone"
              value={data.phone}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="E-mail*"
              name="email"
              value={data.email}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <hr />
        </div>
        <div className="modal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn" onClick={handleEditSupplier}>
            SAVE
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default EditSupplierModal;
