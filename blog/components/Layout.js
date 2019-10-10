import Header from './Header'
import Head from 'next/head'
import '../static/css/components/layout.css'
import '../static/css/common/common.css'
const Layout = (porps)=>{
  return (
    <div>
      <Head>
        <title>{porps.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Head>
      <Header/>
      <div className="container">
         <div className="main">
            {porps.children}
         </div>
      </div>
   
    </div> 
  )
}
export default Layout