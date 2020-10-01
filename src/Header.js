import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
          
           <div className="header__icons">
             <div className="header__icon
             header__icon--active"><HomeIcon/>
             <p>Home</p>
             </div>
            <div className="header__icon">
            <FlashOnIcon/>
            <p>What's Hot</p>
            </div>
             <div className="header__icon">
             <LiveTvIcon/>
             <p>Live TV</p>
             </div>
              <div className="header__icon">
              <VideoLibraryIcon/>
              <p>Video Library</p>
              </div>
             <div className="header__icon">
             <SearchIcon/>
             <p>Search</p>
             </div>
             <div className="header__icon">
             <PersonIcon/>
             <p>Login</p>
             </div>
          
               {/*Here goes all the icons */}
           </div>
           <img src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png" alt="">

           </img>
        </div>
    )
}

export default Header
