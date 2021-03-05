// import React,{useEffect} from 'react'
// import {Helmet} from 'react-helmet';
// import {useHistory} from 'react-router-dom'
// import Navbar from './Navbar'
// import "./Excesiseai.css";

// function Exerciseai() {

// 	const {repperset, videourl,ex_name} = JSON.parse(localStorage.getItem('card-data'));
	
// 	const history=useHistory()
//     useEffect(() => {
//         return () => {
//               history.goForward()
//             }
//         }, []);

// 		useEffect(() => {
      
//         if(localStorage.getItem("card-data"))
//         {

//         }
//         else
//          {
//              window.location="/"

//          }

// 				 //primary keypoints.
//     		const keypoint_select = document.getElementById('sel');
//     		const keypoint_labels=[["Nose"], ['Neck'], ["LShoulder"], ["RShoulder"], ["LElbow"], ["RElbow"], ["LWrist"], ["RWrist"], ["LHip"], ["RHip"]];
// 				const keypoints_no  = [0, 17, 5 , 6, 7, 8, 9, 10, 11, 12];
// 				for(let i=0; i<keypoint_labels.length; i++) {
// 						const ind = keypoints_no[i];
// 						const ele = i===8 ? `<option value="${ind}" selected>${keypoint_labels[i]}</option>` : `<option value="${ind}" selected>${keypoint_labels[i]}</option>`;
// 						keypoint_select.innerHTML += ele;
// 				}

// 				//select excersise.
// 				const excersise_select = document.getElementById('exsel');
// 				const excersise_labels=['Squat', 'Push Ups', 'Lunges'];
// 				const excersise_no  = [0, 1, 2];
// 				for(let i=0; i<excersise_labels.length; i++) {
// 						const ind = excersise_no[i];
// 						const ele = `<option value="${ind}">${excersise_labels[i]}</option>`;
// 						excersise_select.innerHTML += ele;
// 				}

//     }, [])
//     return (
//       <div>
// 			<div className="pose-navbar" style={{width:"100%",background:"#0E0E29",height:"50px"}}>
// 					<center>
// 					<h3 className="text-center text-white btn btn-light mt-2" style={{background:"transparent"}}
// 					onClick={()=>{
// 						window.location="/";
// 					}}
// 					>back</h3>
// 					</center>
// 			</div>
					
// 			<div id="loading" style={{display: 'flex'}}>
// 			<div className="spinner-text">
// 			  Loading PoseNet model...
// 			</div>
// 			<div className="sk-spinner sk-spinner-pulse" />
// 		  </div>
// 		  <div id="main" style={{display: 'none'}}>
// 			{/* <ul id="joint-dropdown-wrapper">
// 			<li class="dropdown">
// 			  <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Joint<b class="caret"></b></a>
// 			  <ul class="dropdown-menu" id="joint-dropdown">
			
// 			  </ul>
// 			 </li>
// 		  </ul> */}
// 			<div style={{display: 'none'}}>
// 			  <label htmlFor="sel" className="mr-3">Primary Keypoint:</label>
// 			  <select className="form-control" id="sel" style={{width: 100, display: 'inline-block'}} />
// 			</div>
// 			<div style={{display: 'none'}}>
// 			  <label htmlFor="exsel" className="mr-3">Excersise:</label>
// 			  <select className="form-control" id="exsel" style={{width: 100, display: 'inline-block'}} />
// 			</div>          
// 			<video id="recording" width={600} height={500} style={{display: 'none'}} />
// 			<div className="container-fluid">
// 			  <div className="row">
// 				<div id="canvas-container" className="col-sm-6">
// 				  <div id="pbar" style={{display: 'none'}}>
// 					<div id="myProgress" className="mx-3 my-2">
// 					  <span id="ptage" />
// 					  <div id="myBar" />
// 					</div>
// 					<div id="feedback" style={{display: 'none'}}>
// 					</div>
// 				  </div>
// 				  <video id="video" playsInline style={{display: 'block'}} />
// 				  <canvas id="output" style={{display: 'none'}}>
// 				  </canvas></div>
// 				<div className="col-sm-3" style={{position: 'relative'}}>
// 				<video src={videourl} id="excersise-video" style={{display: 'block'}}  autoPlay loop muted/>
// 				{/*<video id="excersise-video" autoPlay style="display: block;">
// 						  <source src={videourl} type="video/mp4" />
// 					</video>*/}
// 				</div>
// 				<div className="col-sm-3 col-lg-2 " style={{marginLeft:"100px"}}>
// 				  <div className="card mb-2 p-2">
// 					<div className="card-body">{ex_name}</div>
// 				  </div>
// 				  <div className="card mb-2 p-2">
// 					<div className="card-header">Stats</div>
// 					<div id="exstats" className="card-body">
// 					  <p id="angle">Angle: </p>
// 					  <p id="reps">Reps: 0</p>
// 					  <p id="left">Left: {repperset}</p>
// 					</div> 
// 				  </div>
// 				  <div className="card p-2">
// 					<div className="card-header">Messages</div>
// 					<p id="message" style={{fontSize:"15px"}}>
// 					  We are loading please watch expert video meanwhile.
// 					</p>
// 				  </div>
// 				</div>
// 			  </div>
// 			</div>
// 		  </div>

// 		  <Helmet>
//         <script src="camera.js" ></script>
//       </Helmet>
			
//         	</div>
//     )

// }

// export default Exerciseai

import React,{useEffect} from 'react'
import {Helmet} from 'react-helmet';
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar'
import "./Excesiseai.css";

function Exerciseai() {

	const {repperset, videourl,ex_name} = JSON.parse(localStorage.getItem('card-data'));
	
	const history=useHistory()
    useEffect(() => {
        return () => {
              history.goForward()
            }
        }, []);
    useEffect(() => {
      
        if(localStorage.getItem("card-data"))
        {

        }
        else
         {
             window.location="/"

         }

				 //primary keypoints.
    		const keypoint_select = document.getElementById('sel');
    		const keypoint_labels=[["Nose"], ['Neck'], ["LShoulder"], ["RShoulder"], ["LElbow"], ["RElbow"], ["LWrist"], ["RWrist"], ["LHip"], ["RHip"]];
				const keypoints_no  = [0, 17, 5 , 6, 7, 8, 9, 10, 11, 12];
				for(let i=0; i<keypoint_labels.length; i++) {
						const ind = keypoints_no[i];
						const ele = i===8 ? `<option value="${ind}" selected>${keypoint_labels[i]}</option>` : `<option value="${ind}" selected>${keypoint_labels[i]}</option>`;
						keypoint_select.innerHTML += ele;
				}

				//select excersise.
				const excersise_select = document.getElementById('exsel');
				const excersise_labels=['Squat', 'Push Ups', 'Lunges'];
				const excersise_no  = [0, 1, 2];
				for(let i=0; i<excersise_labels.length; i++) {
						const ind = excersise_no[i];
						const ele = `<option value="${ind}">${excersise_labels[i]}</option>`;
						excersise_select.innerHTML += ele;
				}

    }, [])
    return (
      <div>
			<div className="pose-navbar" style={{width:"100%",background:"#0E0E29",height:"50px"}}>
					<center>
					<h3 className="text-center text-white btn btn-light mt-2" style={{background:"transparent"}}
					onClick={()=>{
						window.location="/";
					}}
					>back</h3>
					</center>
			</div>

			<div id="loading" style={{display: 'flex'}}>
			<div className="spinner-text">
			  Loading PoseNet model...
			</div>
			<div className="sk-spinner sk-spinner-pulse" />
		  </div>
		  <div id="main" style={{display: 'none'}}>
			{/* <ul id="joint-dropdown-wrapper">
			<li class="dropdown">
			  <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Joint<b class="caret"></b></a>
			  <ul class="dropdown-menu" id="joint-dropdown">
			
			  </ul>
			 </li>
		  </ul> */}
			<div style={{display: 'none'}}>
			  <label htmlFor="sel" className="mr-3">Primary Keypoint:</label>
			  <select className="form-control" id="sel" style={{width: 100, display: 'inline-block'}} />
			</div>
			<div style={{display: 'none'}}>
			  <label htmlFor="exsel" className="mr-3">Excersise:</label>
			  <select className="form-control" id="exsel" style={{width: 100, display: 'inline-block'}} />
			</div>          
			<video id="recording" width={600} height={500} style={{display: 'none'}} />
			<div className="container-fluid">
			  <div className="row">
				<div id="canvas-container" className="col-sm-6">
				  <div id="pbar" style={{display: 'none'}}>
					<div id="myProgress" className="mx-3 my-2">
					  <span id="ptage" />
					  <div id="myBar" />
					</div>
					<div id="feedback" style={{display: 'none'}}>
					</div>
				  </div>
				  <video id="video" playsInline style={{display: 'block'}} />
				  <canvas id="output" style={{display: 'none'}}>
				  </canvas></div>
				<div className="col-sm-3" style={{position: 'relative'}}>
				<video src={videourl} id="excersise-video" style={{display: 'block'}}  loop muted autoPlay/>
				{/*<video id="excersise-video" autoPlay style="display: block;">
						  <source src={videourl} type="video/mp4" />
					</video>*/}
				</div>
				<div className="col-sm-3  col-lg-2 mt-2" style={{marginLeft:"100px",background:"whitesmoke"}}>
				  <div className="card mb-2 pt-3 p-2" style={{background:"purple",borderRadius:"2px",color:"white",fontSize:"20px"}}>
					<div className="card-body">Squat</div>
				  </div>
				  <div className="card mb-2 p-2" style={{background:"purple",borderRadius:"2px",color:"white",fontSize:"20px"}}>
					<div className="card-header">Stats</div>
					<div id="exstats" className="card-body">
					  <p id="angle">Angle: </p>
					  <p id="reps">Reps: 0</p>
					  <p id="left">Left: {repperset}</p>
					</div> 
				  </div>
				  <div className="card p-2" style={{background:"purple",borderRadius:"2px",color:"white",fontSize:"20px"}}>
					<div className="card-header" >Messages</div>
					<p id="message" style={{fontSize:"15px"}}>
					  We are loading please watch expert video meanwhile.
					</p>
				  </div>
				</div>
			  </div>
			</div>
		  </div>

		  <Helmet>
        <script src="camera.js" ></script>
      </Helmet>
			
        	</div>
    )
}

export default Exerciseai

