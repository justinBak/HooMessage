import '../resources/css/Avatar.css';
import jtb_profile from '../resources/images/jtb_profile.jpg'

// Displays the users profile photo
function Avatar({images = jtb_profile}) {
  return <div><img className='avatar' src={images}></img></div>
}

export default Avatar;