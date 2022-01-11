import './styles.css';
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Vídeo Locadora</h1>
                    <a href="https://github.com/brunoness" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/brunoness</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;