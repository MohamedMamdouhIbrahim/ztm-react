import CategoryItem from "../category-item/Category-item.component";
import React from "react"; // Make sure to import React
import "./category-items.styles.css"
const CategoriesItems = ({ categories }) => {
  return (
    <div className="categories-section">
      {categories.map((category) => {
        console.log(category);
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesItems;
