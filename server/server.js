// NewsApi Server for fetching news items from newsapi.org and triggering
// realtime updates with Pusher
// Imports Pusher sensitive information, controller for NewsAPI,

// Allows for the loading of env files into process.env
require('dotenv').config({path: 'variables.env'});

//Express is used to create a framework for fetching data from the NewsApi 
const express = require('express');

// Allows for the server to indicate any origins other than its own from which a 
// browser should permit loading resources
const cors = require('cors');

const Pusher = require('pusher');

// Importing the NewsApi
const NewsAPI = require('newsapi');

const app = express();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

const newsapi = new NewsAPI(process.env.News_API_KEY);

// fetchNews component determines what information is retrieved from the NewsApi and
// sets the number of items returned from the API 
const fetchNews = (searchTerm, pageNum) =>
  newsapi.v2.topHeadlines({
    q: searchTerm,
    language: 'en',
    page: pageNum,
    pageSize: 5
  });

app.use(cors());

// Updates the feed from the NewsApi
function updateFeed(topic) {
  let counter = 0;
  setInterval(() => {
    fetchNews(topic, counter)
      .then(response => {
        pusher.trigger('news-channel', 'update-news', {
          articles: response.articles
        });
        counter += 1;
      })
      .catch(error => console.log(error));
  }, 1800000);
}

// Fetches the News data from the NewsApi
app.get('/live', (req, res) => {
  const topic = 'us';
  fetchNews(topic, 1)
    .then(response => {
      res.json(response.articles);
      updateFeed(topic);
    })
    .catch(error => console.log(error));
});

// Sets and listens to the port by which data is retrieved from
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running ➡️  PORT ${server.address().port}`);
});
