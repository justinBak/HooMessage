import '../resources/css/Explore.css';
import NewsFeed from './NewsFeed';

function Explore() {

  return (
    <div className="explore-container">
      <div className='row'>
        <h3 className='top-headlines-title'>Top Headlines</h3>
        <div className='container'>
          <div>
            <NewsFeed/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;