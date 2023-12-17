import "./supplierCard.css";
import edit_icon from "../../images/edit-icon.png";
import delete_icon from "../../images/delete-icon.png";

const SupplierCard = ({ supplier }) => {
  return (
    <div className="Supplier-card">
      <div key={supplier.id} className="supplier">
        <div className="supplier-name">
          <h1>{supplier.name}</h1>
        </div>
        <p>
          <span className="title">Address:</span> {supplier.address}
        </p>
        <hr className="hrClass" />
        <p>
          <span className="title">Phone Number:</span> {supplier.phone}
        </p>
        <hr className="hrClass" />
        <p>
          <span className="title">E-mail:</span> {supplier.email}
        </p>
        <hr className="hrClass" />
        <span className="supplier-buttons">
          <img src={edit_icon} />
          <img src={delete_icon} />
        </span>
      </div>
    </div>
  );
};

export default SupplierCard;
