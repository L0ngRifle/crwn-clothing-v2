import "./category-item.stlye.scss"

function CategoryItem({category: {imageUrl, title}}) {
  return(
    <div className="category-container">
      <div className="background-image" style={{
        background: `url(${imageUrl})`
      }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
export default CategoryItem