import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../resources/css/MyRoutes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import Header from './Header';
import ExplorerPage from './ExplorerPage';
import Notifications from './Notifications';
import Messages from './Messages';
import Bookmarks from './Bookmarks';
import Lists from './Lists';
import Profile from './Profile';
import More from './More';
import NavSection from './NavComponent';

//Components are routed through here
function MyRoutes() {
  return (
    <Router>
      <div className='routes-container'>
        <Header className="header" />
        <div className='row'>
          <div className='col-md'>
            <NavSection/>
          </div>
          <div className='col-md-8'>
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/explore" element={<ExplorerPage/>}/>
              <Route path="/notifications" element={<Notifications/>}/>
              <Route path="/messages" element={<Messages/>}/>
              <Route path="/bookmarks" element={<Bookmarks/>}/>
              <Route path="/list" element={<Lists/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/more" element={<More/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default MyRoutes;
