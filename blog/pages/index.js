import React from 'react'
import Layout from '../components/Layout'
import '../static/css/common/view.css'
// import Bmob from "hydrogen-js-sdk";
import fetch from 'isomorphic-unfetch';
const Home = (props) => {
  console.log(props)
  return  (
    <div>
      <Layout title={'Home'}>
        <div className="main-view">
          <div className="main-view-context">
            <div className="main-list-view">
              1
            </div>
            <aside className="main-aside-view">
              2
            </aside>
          </div>
        </div>
      </Layout>
    </div>
  )
}
Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:5000/api/blog?nowpage=1&&pagesize=10')
  const json = await res.json()
  // Bmob.initialize("275a37aa312ebc86", "960123");
  // const query = Bmob.Query('Blogs');
  // query.limit(10)
  // const res = await query.find() 
  return { data: json }
}

export default Home
