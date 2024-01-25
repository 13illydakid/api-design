import "./Category.css";

function Categorie({ categories }) {

return (

  <div className="categories-container">
  {categories.map((category, i) => {
    if (i > 0) {
      return (
        <div className="category-type">
          {/* {category.icon} */}
          <div className="category-icon">
            <category.icon />
          </div>
          <div className="category-label">
            {category.label}</div>
        </div>
      )
    }
    return null
  })}
</div>
)
}


export default Categorie;
