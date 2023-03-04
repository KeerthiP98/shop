import {Link} from "react-router-dom"
const NavBar =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">


        <div className="container-fluid ">
    <a className="navbar-brand text-light" >Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/list">List</Link>
          </li>
          </ul>
          <ul className="nav justify-content-end">
          <li  className="nav-item ">
          <Link className="nav-link active text-light" aria-current="page" to="/signin">Sign In</Link>
           </li>
           <li  className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/login">Log In</Link>
           </li>
           </ul>
        
          
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  

        
        </>
    )
}

export default NavBar;