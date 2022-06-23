import '../resources/css/Explore.css';
import NewsFeed from './NewsFeed';

function Explore(props) {

  // const { data } = useContext(NewsContext);
  // console.log(data);

  return (
    <div className="explore-container">
      <div className='row'>
        <h3>What's happening?</h3>
        <div className='container'>
          {/* <div>
            {data ? data.articles.map(news => <NewsArticle data={news} key={news.url}/>)
            : "Loading"  
          }
          </div> */}
          <div>
            <NewsFeed/>
            {/* <NewsArticle/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;