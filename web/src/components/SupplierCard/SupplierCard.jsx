import "./supplierCard.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SupplierCard = ({ supplier }) => {
  // const { id } = useParams();
  // const [supplierDetails, setSupplierDetails] = useState(undefined);

  // useEffect(() => {
  //   const fetchSupplierDetails = async () => {
  //     try {
  //       const response = await fetch(`http://127.0.0.1:10001/suppliers/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       const data = await response.json();

  //       if (response.ok) {
  //         setSupplierDetails(data);
  //       } else {
  //         console.log("Error");
  //       }
  //     } catch (err) {
  //       console.error(
  //         `Error fetching details for supplier ${id}`,
  //         err
  //       );
  //     }
  //   };
  //   fetchSupplierDetails();
  // }, [id]);

  return (
    <div className="Supplier-card">
      <div key={supplier.id} className="supplier">
        <div className="supplier-name">
        <h1>{supplier.name}</h1>
        </div>
        <p>Address: {supplier.address}</p> <hr />
        <p>Phone Number: {supplier.phone}</p> <hr />
        <p>E-mail: {supplier.email}</p> <hr />

        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default SupplierCard;
