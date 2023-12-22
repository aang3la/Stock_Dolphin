import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ItemCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Item-Card">
      <h1>{item.name}</h1>
      <button onClick={() => setOpenModal(true)}>Delete</button>

      {openModal && (
        <ConfirmationModal
          closeModal={setOpenModal}
          content="Do you want to delete this item?"
          buttonName="CONFIRM"
        />
      )}
    </div>
  );
};

export default ItemCard;
