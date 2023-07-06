import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { Link } from "react-router-dom";
import './index.css'

function Header() {
    return (
        <div>
            <img src="/banner.jpg" class="img-fluid mx-auto d-block" alt="Responsive image"></img>
            <nav class="navbar navbar-expand-lg bg-new" data-bs-theme="dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav navbar-nav mr-auto mt-2 mt-lg-0 mx-auto">
                            <li class="nav-item">
                                <Link to={`/`} class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link to={`/about/tcsc`} class="dropdown-item">About TCSC</Link>
                                    </li>
                                    <li><Link to={`/about/mission`} class="dropdown-item">Our Vision and Mission</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={`/aluminai`}>Alumni</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={`/contact`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header