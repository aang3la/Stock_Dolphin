import close from "../../images/close.png";
import { useState } from "react";

const MoveItemModal = ({ closeModal, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleMoveItem = () => {

    };

  return (
    <div className="overlay-container">
        <dialog id="move-item-dialog" open>
            <div className="modal-title">
            <h1>Move Item</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
            </div>
            {/* <div className="move-item-modal-body">
            {categories.map((category) => {
                <button 
                key={category.id}
                onClick={() => handleMoveItem(category.id)}
                className={selectedCategory === category.id ? 'selected' : ''}
              >
                    {category.name}
                </button>
            })}
            </div> */}
            <div className="move-item-modal-footer">
                <button>Move Item</button>
            </div>
        </dialog>

    </div>
  )
}

export default MoveItemModal