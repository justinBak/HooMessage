import React, {Component} from 'react';
import Pusher from "pusher-js";
// pushid generates a random ID string
import pushid from "pushid";
import '../resources/css/NewsFeed.css';
import moment from 'moment';


class NewsFeed extends Component {
  
  // Contains a list of all news articles from the NewsApi
  // Array is updated everytime the page is loaded with updated news info
  state = {
    newsItems: []
  }
  // Fetches the list of news items from the server which is hosted at the url below, but 
  // can be changed to be hosted elsewhere
  componentDidMount() {
    fetch('http://localhost:5000/live')
      .then(response => response.json())
      .then(articles => {
        this.setState({
          newsItems: [...this.state.newsItems, ...articles]
        });
      }).catch(error => console.log(error));

    const pusher = new Pusher({
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    const channel = pusher.subscribe('news-channel');
    channel.bind('update-news', data => {
      this.setState({
        newsItems: [...data.articles, ...this.state.newsItems]
      });
    });
  }

  // Renders the newsApi data
  render() {
    const NewsItem = (article, id) => (
      <div className='newsfeed-container'>
        <div className='article-titles'>
          <span className='article-name'>{article.source.name}</span>
          <p className='article-published'>{moment(article.publishedAt).fromNow()}</p>
          <a className='newsfeed-link' key={id} href={`${article.url}`} target="_blank">
            <p>{article.title}</p>
          </a>
        </div>
        <div className='images-container'>
          <a className='newsfeed-link' key={id} href={`${article.url}`} target="_blank">
            <img key={id} className='images' src={article.urlToImage} width="100vw"></img>
          </a>
        </div>
        <br/>
      </div>
    ); 
    
    const newsItems = this.state.newsItems.map(e => NewsItem(e, pushid()));
  
    return(
      <div>
        {newsItems}
      </div>
    )
  }


}

export default NewsFeed;