import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  const [user,setuser] = useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setuser(user);
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar bg-body-secondary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Page|Events <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgEN-ZElWljQEWiNWmCTuU0dQgxZ-OKdIWjgJrBFsoSj7T-QX3_7svc4tniRS34XaWVA&usqp=CAU" alt="" className="image-fluid" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Page|Events</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
 {!user ? (<><li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#events">Events</a>
                  </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                  </li>

               
                  
                  </>):(
                     <><li className="nav-item">
                      <a className="nav-link" href="/events/create">Create Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/booking">My Bookings</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/event/me">My Events</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="/payment">Payments</a>
                      </li>
                      </>
          ) 
          
        
        }
      

            <hr className=""/>
 {user ? ( <><li className="nav-item com">
                  <img src={user.profile} alt="" className="image-fluid" />
                  <div className="names">
                    {user.fullName}
                    <br />
                    @{user.username}
                  </div>
                  <br />

                </li>
                <hr />
                <div className="btn btn-secondary btn-lg log" onClick={logout}>Logout</div></>
          ):(
   <li className="nav-item">
   <a className="nav-link btn btn-secondary btn-lg text-light" href="/login">Login</a>
   <hr />
 </li>
          )}
     
         
      
        </ul>
  
      </div>
    </div>
  </div>
</nav>  
    </div>
  );
}
export default Navbar;