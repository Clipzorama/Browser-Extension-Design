import '../styles/Header.css'
import logoS from '../assets/images/logo.svg'
import sun from '../assets/images/icon-sun.svg'

function Header() {
    return (
        <div className="heady">
            <div className="headL">
                <img src={logoS} alt="logo" />
                <h3>Extensions</h3>
            </div>
            <div className="toggler">
                <img src={sun} alt="Sun Symbol" />
            </div>
        </div>
    );
}

export default Header;
