import '../resources/css/ExplorerPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Explore from './Explore';

function ExplorerPage() {

  return (
    <div className="app">
      <div className='content-container row'>
        <div className='col-md-8'>
          <h2 className='explore-title'>Explore</h2>
          <div className='explore-container'>
            <Explore/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorerPage;
