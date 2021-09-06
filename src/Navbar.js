import "./Navbar.css"

function Navbar() {
const textStyle={
  letterSpacing: "2px",
  textTransform: "Uppercase"
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid" >
          <a className="navbar-brand px-5" href="#">Sachin Pandey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active ps-5" aria-current="page" href="/" style={textStyle}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ps-5" aria-current="page" href="https://drive.google.com/file/d/1oB_Pv-RNjMkVL5KsnBxyrIhILb5npFQs/view?usp=sharing" style={textStyle}>Resume</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ps-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={textStyle}>
                 Contact
          </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://www.linkedin.com/in/skpandey885/" target="_blank">LinkedIn</a></li>
                  <li><a className="dropdown-item" href="https://github.com/skpandey885" target="_blank">Github</a></li>
                  <li><hr className="dropdown-divider" /></li>
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