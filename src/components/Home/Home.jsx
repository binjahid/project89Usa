import React from 'react';

import {FaDiscord ,FaInstagram , FaTwitter} from "react-icons/fa";

// import Header from '../Shared/Header/Header';
import "./Home.css"
import clanIconOne from "../../assets/images/Taira.png"
import clanIconTwo from "../../assets/images/minamoto.png"
import clanIconThree from "../../assets/images/tachiban.png"
import clanIconFour from "../../assets/images/fujiwara.png"
import FadeFunction from './FadeAnimation';
import Taira from '../ClanModals/Taira';
import Minamoto from '../ClanModals/Minamoto';
import Tachiban from '../ClanModals/Tachiban';
import Fujiwara from '../ClanModals/Fujiwara';
const Home = () => {
    const {welcomeDesign , toDesign , projectDesign , startAnimation , interval} = FadeFunction()

const stopInterval = interval.current;
  React.useEffect(() => {
    startAnimation();
    return () => {
      clearInterval(stopInterval);
    };
  });
    return (
      <>
        <div className='homeContainer'>
            {/* <Header></Header> */}<div className='headerHeight'></div>
            <div className="clanIconsCotainer">
                <button className='clanButton' type="button" data-bs-toggle="modal" data-bs-target="#taira"><img src={clanIconOne} className='clanIcon' alt="" /></button>
                <button className='clanButton' type="button" data-bs-toggle="modal" data-bs-target="#minamoto"><img src={clanIconTwo} className='clanIcon' alt="" /></button>
                <button className='clanButton' type="button" data-bs-toggle="modal" data-bs-target="#tachiban"><img src={clanIconThree} className='clanIcon' alt="" /></button>
                <button className='clanButton' type="button" data-bs-toggle="modal" data-bs-target="#fujiwara"><img src={clanIconFour} className='clanIcon' alt="" /></button>
            </div>
            <div className="HomeContentContainer">
               <div className="homeTitleContainer">
               <h2  style={welcomeDesign}>Welcome</h2>
               <h2  style={toDesign}>To</h2>
               <h2  style={projectDesign}>Project89</h2>
               </div>
                <p className="homeDes">The Council awaits_ _</p>
            </div>
            <div className="socialIconsCotainer">
                <a href='instagram' target="_blank"><FaInstagram className='socialIcon'/></a> <a href='discord'><FaDiscord className='socialIcon'/></a> 
                <a href='twitter'><FaTwitter className='socialIcon'/></a>
            </div>
        </div>
        {/* Clan Modals HTML */}
        <Taira/>
      {/* minamoto */}
      <Minamoto/>
{/* tachiban */}
      <Tachiban/>
  {/* fujowara */}
      <Fujiwara/>
      </>
    );
};

export default Home;