import React from 'react';
import GetWidthook from '../GetWidthHook';
const FadeFunction = () => {
    const {width} =  GetWidthook()
    const fontSize = width <= 770 ? "8rem" :"10rem"
    console.log(fontSize);
    const interval = React.useRef();
    const clanCommonDesing = {
        fontFamily: "kashima",
        fontSize: fontSize,
        margin: 0,
        fontWeight :400,
        position : "absolute",
        transition : "1s",
        color: "white",
    }
    const [welcomeDesign , setWelcomeDesign] = React.useState({color: "white",
        fontFamily: "kashima",
        fontSize:fontSize,
        margin: 0,
        fontWeight :400,
        position : "absolute",
        opacity : 1,
        transition : "1s",
        active : true
        
    })
    const [toDesign , setToDesing] = React.useState({color: "white",
    fontFamily: "kashima",
    fontSize: fontSize,
    margin: 0,
    fontWeight :400,
    position : "absolute",
    opacity : 0,
    transition : "1s",
    active : false
    })
    const [projectDesign , setProjectDesign] = React.useState({color: "white",
    fontFamily: "kashima",
    fontSize: fontSize,
    margin: 0,
    fontWeight :400,
    position : "absolute",
    opacity : 0,
    transition : "1s",
    active : false
    })
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
    return {
        welcomeDesign , toDesign , projectDesign , startAnimation , interval
    }
}
export default FadeFunction