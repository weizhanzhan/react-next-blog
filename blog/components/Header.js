import Link from 'next/link'
import '../static/css/components/header.css'
const Header = ()=>{
  return (
    <div className="main-header-box">
      <header className="main-header">
        <div className="container">
          <a href="/" className="logo">
            <img src="/static/logo_1.png"></img>
          </a>
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="main-nav-list">
                <ul className="phone-hide">      
                    <Link href="/">
                      <li className="nav-item link-item route-active">Home</li>
                    </Link>
                    <Link href="/timeline">
                      <li className="nav-item link-item">Timeline</li>
                    </Link>
                    <Link href="/project">
                      <li className="nav-item link-item">Project</li>
                    </Link>   
                </ul>
              </li>
              <li className="nav-item search">
                <form className="search-form">
                  <input className="search-input" type="search"></input>
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" className="search-icon"></img>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </header>  
    </div>
  )
}
export default Header