import React from 'react';
import Header from '../Shared/Header/Header';
import "./Home.css"
import clanIconOne from "../../assets/images/Taira.png"
import clanIconTwo from "../../assets/images/minamoto.png"
import clanIconThree from "../../assets/images/tachiban.png"
import clanIconFour from "../../assets/images/fujiwara.png"
const Home = () => {
    const clanCommonDesing = {
        fontFamily: "kashima",
        fontSize: "10rem",
        margin: 0,
        fontWeight :400,
        position : "absolute",
        transition : "1s",
        color: "white",
    }
    const [welcomeDesign , setWelcomeDesign] = React.useState({color: "white",
        fontFamily: "kashima",
        fontSize: "10rem",
        margin: 0,
        fontWeight :400,
        position : "absolute",
        opacity : 1,
        transition : "1s",
        active : true
        
    })
    const [toDesign , setToDesing] = React.useState({color: "white",
    fontFamily: "kashima",
    fontSize: "10rem",
    margin: 0,
    fontWeight :400,
    position : "absolute",
    opacity : 0,
    transition : "1s",
    active : false
})
    const [projectDesign , setProjectDesign] = React.useState({color: "white",
    fontFamily: "kashima",
    fontSize: "10rem",
    margin: 0,
    fontWeight :400,
    position : "absolute",
    opacity : 0,
    transition : "1s",
    active : false
})

const interval = React.useRef();

const startAnimation = () => {
    interval.current = setInterval(() => {
        if(welcomeDesign.active === true ){
            setWelcomeDesign(
                {...clanCommonDesing , opacity : 0 , active : false}
            )
            setToDesing(
                {
                    ...clanCommonDesing , opacity : 1 , active : true
                }
            )
            setProjectDesign({
                ...clanCommonDesing , opacity : 0 , active : false
            })
        }
        else if(toDesign.active === true ){
            setWelcomeDesign(
                {...clanCommonDesing , opacity : 0 , active : false}
            )
            setToDesing(
                {
                    ...clanCommonDesing , opacity : 0 , active : false
                }
            )
            setProjectDesign({
                ...clanCommonDesing , opacity : 1 , active : true
            })
        }
        else if(projectDesign.active === true ){
            setWelcomeDesign(
                {...clanCommonDesing , opacity : 1 , active : true}
            )
            setToDesing(
                {
                    ...clanCommonDesing , opacity : 0 , active : false
                }
            )
            setProjectDesign({
                ...clanCommonDesing , opacity : 0 , active : false
            })
        }
    }, 4000);
}

const stopInterval = interval.current;
  React.useEffect(() => {
    startAnimation();
    return () => {
      clearInterval(stopInterval);
    };
  });
    return (
        <div className='homeContainer'>
            <Header></Header>
            <div className="clanIconsCotainer">
                <img src={clanIconOne} className='clanIcon' alt="" />
                <img src={clanIconTwo} className='clanIcon' alt="" />
                <img src={clanIconThree} className='clanIcon' alt="" />
                <img src={clanIconFour} className='clanIcon' alt="" />
            </div>
            <div className="HomeContentContainer">
               <div className="homeTitleContainer">
               <h2  style={welcomeDesign}>Welcome</h2>
               <h2  style={toDesign}>To</h2>
               <h2  style={projectDesign}>Project89</h2>
               </div>
                <p className="homeDes">The Council awaits_ _</p>
            </div>
            <div className="socialIconsCotainer"></div>
        </div>
    );
};

export default Home;