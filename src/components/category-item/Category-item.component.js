import "./category-item.css"
const CategoryItem = ({category})=>
{
    let {imageUrl,title} = category;
    return(
        <div className='category' style={{background:`url(${imageUrl})`}}>
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>shop now</p>
            </div>
          </div>
    );
}
export default CategoryItem;