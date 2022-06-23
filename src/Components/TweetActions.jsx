import PropTypes from 'prop-types';
// Copy Component is used for copying text 
import copy from 'copy-to-clipboard';
import { FaComment, FaHeart, FaRetweet, FaShare } from 'react-icons/fa';
import '../resources/css/TweetActions.css';

function TweetActions({ user, content, favorite, counters, onRetweet, onToggleFavorite }) {

  // Everytime a user clicks on the share icon it'll copy the message, user, and you can 
  // paste it anywhere that accepts text
  const handleShareButtonClick = () => {
    copy(`@${user}: "${content}"`);
  };

  //Copies the message and user being retweeted, so it'll display in the Timeline
  const handleRetweetButtonClick = () => {
    onRetweet(`Retweeted from @${user}: "${content}"`);
  };


  return (
    <ul className="tweet-actions">
      <li>
        <button type='button' className="tweet-actions-button">
          {/* Displays the number of comments */}
          <FaComment size="18" /> {counters.comments}
        </button>
      </li>
      <li>
        {/* Handles the handleRetweetButtonClick function, so that everytime a user
          clicks on the retweet icon it'll create a retweet message found the function*/}
        <button type='button' className="tweet-actions-button" onClick={handleRetweetButtonClick}>
          {/* Displays the number of retweets including new retweets */}
          <FaRetweet size="25"/> {counters.retweets}
        </button>
      </li>
      <li>
        <button type='button' className="tweet-actions-button" onClick={onToggleFavorite}>
          <FaHeart size="18" color={favorite ? 'rgb(224, 36, 94)' : ''}/> {''}
          {favorite ? counters.favorites + 1 : counters.favorites}
        </button>
      </li>
      <li>
        {/* Handles the handleShareButtonClick fucntion */}
        <button type="button" className="tweet-actions-button" onClick={handleShareButtonClick}>
          <FaShare size="18" />
        </button>
      </li>
    </ul>
  );
}

TweetActions.propTypes = {
  user: PropTypes.string,
  content: PropTypes.string,
  favorite: PropTypes.bool,
  counters: PropTypes.shape({
    comments: PropTypes.number,
    retweets: PropTypes.number,
    favorites: PropTypes.number,
  }),
  onRetweet: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default TweetActions;