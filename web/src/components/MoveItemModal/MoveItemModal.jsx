import "./moveItemModal.css";
import close from "../../images/close.png";
import folder_icon from "../../images/folder_icon.png";
import line from "../../images/line.png";
import { useContext, useState } from "react";
import { Context } from "../../uttils/FetchContextProvider";

const MoveItemModal = ({ closeModal }) => {
  // const { categories } = useContext(Context);
  // const [selectedCategory, setSelectedCategory] = useState('');

  const categoriesData = [
    { name: "Office Supplies" },
    { name: "Kitchen Supplies" },
    { name: "Sanitary Supplies" },
    { name: "Hardware Supplies" },
  ];

  return (
    <div className="overlay-container">
      <dialog className="move-item-dialog" open>
        <div className="move-modal-title">
          <h1>Move Item</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="categories-move-container">
          <div className="green-line">
            <img src={line} id="line" />
          </div>
          <div className="categories-move-modal">
            {categoriesData.map((cat) => {
              return (
                <div id="category-line">
                  <img src={folder_icon} />
                  {cat.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="move-item-modal-body">
            {categories.map((category) => {
                <button 
                key={category.id}
                onClick={() => handleMoveItem(category.id)}
                className={selectedCategory === category.id ? 'selected' : ''}
              >
              {category.title}
                </button>
            })}
            </div> */}

        <button className="move-item-btn">Move Item</button>
      </dialog>
    </div>
  );
};

export default MoveItemModal;
