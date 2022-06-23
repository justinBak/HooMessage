// PropTypes are used to do type checking
import PropTypes from 'prop-types';
import Tweet from './Tweet.jsx';
import '../resources/css/Timeline.css';
import TweetActions from './TweetActions.jsx';

//Displays the lists of tweets in timeline
function Timeline({tweets, favorites, onRetweet, onToggleFavorite}) {
  return(
    <ul className='timeline'>
      {tweets
        // Allows for the newly created tweet to be posted at the beginning of the timeline
        // using Date(created_on) to sort the array
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
        //map() loops through tweet.json API
        .map(({ 
          id, 
          user, 
          created_on, 
          content,
          comments_count,
          retweets_count,
          favorites_count,
          images 
        }) => {
          const isFavorite = favorites.includes(id);
          return (
            // key={} - identifies the id being updated
            <li key={id} className="timeline-item">
              {/* //Renders tweets */}
              {
                /* images={images} sets the handle image for the user's compose 
                form when posted to the timeline */
              }
              <Tweet images={images} user={user} createdOn={created_on}>
                {content}
              </Tweet>
              {
                /* Handles and displays the changes from the TweetActions Component on 
                the Timeline */
              }
              <TweetActions
                user={user}
                content={content}
                favorite={isFavorite}
                counters={{
                  comments: comments_count,
                  retweets:retweets_count,
                  favorites: favorites_count
                }}
                onRetweet={onRetweet}
                onToggleFavorite={() => onToggleFavorite(id)}
              />
            </li>
          );
        }
      )}
    </ul>
  )
}

Timeline.propTypes = {
  tweets: PropTypes.array,
  favorites: PropTypes.array,
  onRetweet:PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default Timeline;