import '../resources/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function More() {
  
  return (
    <div className="app">
      <div className='content-container row'>
        <div className='more-content-ct'>
          <img width="92px" src='https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w600-h300-pc0xffffff-pd'></img>
          <p style={{marginLeft: '18px', fontWeight: 'bold'}}>Spotify</p>
          <button className='btn-style'>
            <a className='spotify-btn' href='https://open.spotify.com/' target="_blank">Spotify</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default More;

