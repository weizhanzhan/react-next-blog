import '../static/css/components/blog_list.css'

const BlogList = ({blogs}) =>{
 
  return (
    <div>
      <ul className="blog-list">     
        {
          blogs.map(blog => {
            return  <BlogItem key={ blog._id } data={ blog }/>
          })
        }
      </ul>
    </div>
  )
}
const BlogItem = (props) =>{
  const { category, date , title, content} = props.data
  console.log(category)
  return(
    <li className="item">
      <div className="blog-box">
        <div className="context-box">
          <div className="info-box">
            <div className="info-row meta-row">
              <ul className="meta-list">
                <li className="meta-item category">
              
                  { category.name }
                </li>
                <li className="meta-item date">
                  { date }
                </li>
              </ul>
            </div>
            <div className="info-row title-row">
              <a className="title">{ title }</a>
            </div>
            <div className="info-row action-row">
              {content}
            </div>
          </div>
          <div className="img-box" style={{'backgroundImage': `url(${category.imgUrl})`}}></div>
        </div>
      </div>
    </li>
  )
}
export default BlogList