
import {AiOutlineUser} from 'react-icons/ai'


function Navbar() {


  return (
    <div>
      <nav className="navbar bg-body-secondary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Page|Events <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgEN-ZElWljQEWiNWmCTuU0dQgxZ-OKdIWjgJrBFsoSj7T-QX3_7svc4tniRS34XaWVA&usqp=CAU" alt="" className="image-fluid" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Page|Events</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Events
            </a>
            <ul className="dropdown-menu">
                
              <li><a className="dropdown-item" href="/">Corporate events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Social events</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Arts and cultural events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Sports events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Educational events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Religious events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Political events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Community events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Entertainment events</a></li>
              <hr className="dropdown-divider"/>
              <li><a className="dropdown-item" href="/">Outdoor events</a></li>
            </ul>
            <hr className=""/>
            <li className="nav-item">
            <a className="nav-link  " href="/profile">
             <AiOutlineUser size={25} style={{marginTop:"-5.8px"}}/>  Profile
             </a>
          </li>
         <hr />
          </li>
      
        </ul>
      
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>  
    </div>
  );
}
export default Navbar;