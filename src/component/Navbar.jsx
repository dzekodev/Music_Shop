import '../styles/Navbar.css'
import Logo from '../Assets/logo.png'
import { Button } from '@material-ui/core';
import { Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="logo"/>
            <div className="navList">
                <Link id="link" to='/'><li>Home</li></Link>
                <Link id="link" to="/Music"><li >Music</li></Link>
                <Link id="link" to="/AddSongs"><li>Add Songs</li></Link>
                <Link id="link" to="/Contact"><li>Contact</li></Link>
            </div>
            <Button id="btn" color="primary">Sign In</Button>
        </nav>
    )
}
  
export default Navbar;