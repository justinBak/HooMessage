import '../resources/css/NavComponent.css';
import {AiOutlineHome} from 'react-icons/ai';
import {GiEarthAmerica} from 'react-icons/gi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiMail} from 'react-icons/fi';
import {BsBookmark} from 'react-icons/bs';
import {RiFileList3Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {FiMoreHorizontal} from 'react-icons/fi';
import React from 'react';
import {Link} from 'react-router-dom';


function NavSection() {
  return (
    <div className="nav-container">
      <ul className='row row-container'>
        {/* Change a tags to router dom Link tags */}
        <li className='explore-links'><Link className='nav-links' to='/'><AiOutlineHome className='icon-style' size="1em"/><span>Home</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/explore'><GiEarthAmerica className='icon-style' size="1em"/><span>Explore</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/notifications'><IoIosNotificationsOutline className = 'icon-style' size="1em"/><span>Notifications</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/messages'><FiMail className = 'icon-style' size="1em"/><span>Messages</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/bookmarks'><BsBookmark className = 'icon-style' size="1em"/><span>Bookmarks</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/list'><RiFileList3Line className = 'icon-style' size="1em"/><span>Lists</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/profile'><CgProfile className = 'icon-style' size="1em"/><span>Profile</span></Link></li>
        <li className='explore-links'><Link className='nav-links' to='/more'><FiMoreHorizontal className = 'icon-style' size="1em"/><span>More</span></Link></li>
      </ul>
    </div>
  )
}

export default NavSection;