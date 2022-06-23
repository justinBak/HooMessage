// Moment is a npm library which reads the dates and converts them to readable text
import moment from 'moment';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import '../resources/css/Tweet.css';

// Displays timeline tweets from Api and users message composed in the compose form
function Tweet(props) {
  const {user, images, createdOn, children} = props;
  return(
    <div className="tweet">
      {/* <div><img src={images} alt="" /></div> */}
      <Avatar images={images}/>
      <div>
        <div className="tweet-header">
          {/* Displays users handler names and message creation dates in the timeline */}
          <span className="tweet-user">@{user}</span>{' '}
          {
            /* Formats the createdOn prop which is pulled in from json to a more readable
            date. */
          }
          <span className="tweet-created-on">{moment(createdOn).fromNow()}</span>
        </div>
        {/* Displays user's tweets in the timeline  */}
        <div className="tweet-content">{children}</div>
      </div>
    </div>
  )
}

// Used propTypes rather than TypeScript to check for type matches
Tweet.propTypes = {
  user: PropTypes.string,
  createdOn: PropTypes.string,
}

export default Tweet;