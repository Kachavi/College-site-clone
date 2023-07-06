import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <img src="src/assets/banner.jpg" class="img-fluid mx-auto d-block" alt="Responsive image"></img>
            <nav class="navbar navbar-expand-lg bg-new">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={`/`} class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link to={`about`} class="dropdown-item">About TCSC</Link>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Our Vision and Mission</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Aluminai</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header