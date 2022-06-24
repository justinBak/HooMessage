import { useState } from 'react';
import { nanoid } from 'nanoid';
import initialTweets from '../tweets.json';
import Timeline from './Timeline';
import '../resources/css/App.css';
import ComposeForm from './ComposeForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Explore from './Explore';
import jtb_profile from '../resources/images/jtb_profile.jpg'

// Users current name
const CURRENT_USER = 'justin';

// Import and displays ComposeForm, Timeline, Explore, and NewsContext Components to display in the UI
function App() {

  // UseState() returns the getter and setter within an array
  // The variables below allow allow for the altering and modification of tweets.json
  const [tweets, setTweets] = useState(initialTweets);
  const [favorites, setFavorites] = useState([]);

  // This handler is called everytime you want to post a new tweet
  // It prevents mutation, which is why push() is not used
  const handlePostTweet = (content) => {
    const newTweet = {

      // nanoid dynamically generates a random id every time the user adds a new tweet
      id: nanoid(),
      content,
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
      images: jtb_profile
    }

    // New tweets array is being created from the values of the exisiting one + 
    // the newly created tweet using the three dot notations
    setTweets([...tweets, newTweet])
  };

  // Controls the result from clicking on the favorites icon
  const handleToggleFavorite = (tweetId) => {
    const foundIndex = favorites.indexOf(tweetId);

    if(foundIndex > -1) {
      // Found, return a new array without its id
      setFavorites(favorites.filter((favoriteId) => favoriteId !== tweetId));
    } else {
      // Not found in favorites, return a new array including its id
      setFavorites([...favorites, tweetId]);
    }
  };

  return (
    <div className="app">
      <div className='content-container row'>
        <div className='main-content col-md-6'>
          {
            /* ComposeForm is triggering the function handlePostTweet everytime 
            you click the compose button in the ComposeForm Component */
          }
          <ComposeForm className="compose-form" onSubmit={handlePostTweet}/>
          <div className='separator'></div>
          <Timeline 
            className="timeline"
            tweets={tweets} 
            onRetweet={handlePostTweet}
            favorites ={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
        <div className='explore-section col-md-6'>
          <Explore/>
          <div className='footer'>
            <a className='footer-info'>Terms of Service</a>
            <a className='footer-info'>Privacy Policy</a>
            <a className='footer-info'>Cookie Policy</a>
            <br/>
            <a className='footer-info'>Accessibility</a>
            <a className='footer-info'>Ads info</a>
            <a className='footer-info'>More</a>
            <br/>
            <span className='copyright-symbol'>&copy;</span>
            <a className='copy-right'>WeMessage 2022</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;