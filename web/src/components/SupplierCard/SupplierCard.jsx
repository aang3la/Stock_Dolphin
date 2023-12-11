import "./supplierCard.css";

const SupplierCard = () => {
  const suppliers = [
    {
      title: "Anhoch",
      address: "Address",
      phone: "071235458",
      email: "test@gmail.com",
    },
    {
      title: "Setec",
      address: "Address",
      phone: "071235458",
      email: "test@gmail.com",
    },
    {
      title: "Neptun",
      address: "Address",
      phone: "071235458",
      email: "test@gmail.com",
    },
  ];

  return (
    <div className="Supplier-card">
      <div className="suppliers">
        {suppliers.map((supplier) => {
          return (
            <div key={supplier.id} className="supplier">
              <h1>{supplier.title}</h1>
              <p>{supplier.address}</p>
              <p>{supplier.phone}</p>
              <p>{supplier.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupplierCard;
