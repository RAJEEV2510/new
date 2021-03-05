import React, { useEffect,useState } from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgress } from 'react-radial-progress-indicator';



function Score() {

    const [myScore,setMyScore]=useState("");

    useEffect(()=>{

      const data=JSON.parse(localStorage.getItem('data'))
       setMyScore([data]);
      console.log("score")
      

    },[])
    console.log(myScore)
    return (
        <div >
            {myScore===""? <> <h4 className="text-center mt-5 text-primary mb-2">
               Your Exercises last Score
           </h4>
         
          
            <div  className="circularprogressbar">
                        <CircularProgressbar
                             value={55}
                            text={`${55}%`}
                             strokeWidth={14}
                             styles={buildStyles({
                             textColor: "purple",
                             pathColor: "#F3681B",
                             trailColor: "#407F8A"
                             
                             })}
                       
                             />
           </div></> :""}
         
        
        </div>
    )
}

export default Score
