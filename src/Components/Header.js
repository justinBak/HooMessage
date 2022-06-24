import { Navbar, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import '../resources/css/Header.css';
import { FaSearch } from 'react-icons/fa'
import {TiMessageTyping} from "react-icons/ti";
import {Link} from "react-router-dom";
// import {HiEye} from "react-icons/hi";
import {AiOutlineHome} from 'react-icons/ai';
import {GiEarthAmerica} from 'react-icons/gi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiMail} from 'react-icons/fi';
import {BsBookmark} from 'react-icons/bs';
import {RiFileList3Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {FiMoreHorizontal} from 'react-icons/fi';

function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <div className="logo-container col-md-5">
          <Link to="/" className="logo-link"><h1 className="header-title">HooMessage</h1></Link>
          <TiMessageTyping className="main-logo" size="3em"/>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggler-style"/>
        <Navbar.Collapse className="header-text" id="navbarScroll">
          <Link to="/" className="mobile-links"><p className="mobile-link-pt"><AiOutlineHome className='icon-style' size="1em"/>Home</p></Link>
          <Link to="/explore" className="mobile-links"><p className="mobile-link-pt"><GiEarthAmerica className='icon-style' size="1em"/>Explore</p></Link>
          <Link to="/notifications" className="mobile-links"><p className="mobile-link-pt"><IoIosNotificationsOutline className = 'icon-style' size="1em"/>Notifications</p></Link>
          <Link to="/Messages" className="mobile-links"><p className="mobile-link-pt"><FiMail className = 'icon-style' size="1em"/>Messages</p></Link>
          <Link to="/Bookmarks" className="mobile-links"><p className="mobile-link-pt"><BsBookmark className = 'icon-style' size="1em"/>Bookmarks</p></Link>
          <Link to="/Lists" className="mobile-links"><p className="mobile-link-pt"><RiFileList3Line className = 'icon-style' size="1em"/>Lists</p></Link>
          <Link to="/Profile" className="mobile-links"><p className="mobile-link-pt"><CgProfile className = 'icon-style' size="1em"/>Profile</p></Link>
          <Link to="/More" className="mobile-links"><p className="mobile-link-pt"><FiMoreHorizontal className = 'icon-style' size="1em"/>More</p></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;