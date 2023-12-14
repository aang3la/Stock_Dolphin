import "./categoryCard.css";

function CategoryCard() {
  const categories = [
    {
      title: "Office Supply",
      items: "3 Items",
      price: "€ 338.00",
      updated: "Updated At: 10/10/2023 20:10 ",
    },
    {
      title: "Kitchen Supply",
      items: "3 Items",
      price: "€ 144.00",
      updated: "Updated At: 10/10/2023 20:10 ",
    },
    {
      title: "Sanitary Supply",
      items: "2 Items",
      price: "€ 98.00",
      updated: "Updated At: 10/10/2023 20:10 ",
    },
    {
        title: "Office Supply",
        items: "3 Items",
        price: "€ 338.00",
        updated: "Updated At: 10/10/2023 20:10 ",
      },
      {
        title: "Kitchen Supply",
        items: "3 Items",
        price: "€ 144.00",
        updated: "Updated At: 10/10/2023 20:10 ",
      },
      {
        title: "Sanitary Supply",
        items: "2 Items",
        price: "€ 98.00",
        updated: "Updated At: 10/10/2023 20:10 ",
      },
      {
        title: "Kitchen Supply",
        items: "3 Items",
        price: "€ 144.00",
        updated: "Updated At: 10/10/2023 20:10 ",
      },
      {
        title: "Sanitary Supply",
        items: "2 Items",
        price: "€ 98.00",
        updated: "Updated At: 10/10/2023 20:10 ",
      },
  ];

  return (
    <div className="Category-Card">
      <div className="categories">
        {categories.map((category, i) => {
          return (
            <div key={i} className="category">
              <div>{category.title}</div>
              <div>{category.items}</div>
              <div>{category.updated}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;