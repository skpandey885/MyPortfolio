import "./Navbar.css"

function Navbar() {

  let colorchange={
    color:'whitesmoke'
  }
  
  let colorchange2={
    color:'rgb(40, 93, 240)'
  }
  
   
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" >
        <div className="container-fluid" >
          <a className="navbar-brand px-5 nametext" style={colorchange}>Sachin Pandey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='mytoggle' >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active ps-5" aria-current="page" href="/" style={colorchange2} >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ps-5" aria-current="page" href="https://drive.google.com/file/d/1M59N3j6V9u2pRGfqhMk9ftsOqED3LSCQ/view?usp=sharing"  style={colorchange2}>Resume</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ps-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={colorchange2}>
                 Contact
          </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="mailto:skpandey885@gmail.com" target="_blank">Mail</a></li>
                  <li><hr className="dropdown-divider "/></li>
                  <li><a className="dropdown-item" href="https://linktr.ee/skpandey885" target="_blank">More..</a></li>
                </ul>
              </li>
           
            </ul>
            <form className="d-flex">
        </form>
          </div>
        </div>
      </nav>
    </>
  )

};

export default Navbar;
