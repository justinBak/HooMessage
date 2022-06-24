import '../resources/css/Messages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Messages() {

  return (
    <div className="app">
      <div className='content-container row'>
        <div className='main-content col-md-4'>
          <h2 className='messages-title'>Messages</h2>
          <h3 className='h3-text'>Welcome to your Inbox!</h3>
          <p className='p-text'>Drop a line, share Messages and more with private conversations between you and others on HooMessage. </p>
          <button className='nav-btn explore-btn btn-pt'>Write a message</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;

