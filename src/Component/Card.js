import React, { useState,useEffect } from 'react'
import './Card.css'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPlayer from 'react-player/lazy'
import uuid from 'react-uuid'
import {useSelector,useDispatch} from 'react-redux';
function Card(data) {

    const [open, setOpen] = useState(false);
    const [arr, setArr] = useState([]);
    const [status,setStatus]=useState(false);
    const [color,setColor]=useState("gray")
    const [video,videourl]=useState("")
    const [img,imgurl]=useState("")
    const dispatch = useDispatch();
    useEffect(() => {
     
    setColor("gray")
      console.log("my color")
    }, [status,color])
    const onOpenModal = (value) =>{
        videourl(value.videourl)
        imgurl(value.imgurl)
        setOpen(true)};
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <>
            <h1 style={{ color: "red" }}>X</h1>
        </>
    );

    return (

        <>
            {data.Data ? data.Data.map((value, index) => {
                return <>
                  
                      <div  key={uuid()} className="cards">
                
                        <input type="checkbox"   name="vehicle1" style={{ marginLeft: "10px", marginTop: "10px" }} 
                       
                        onChange={(e) => {
                         
                            if (e.target.checked) {
                                arr.push(value);
                           
                                dispatch({type:'ADD_TO_PLAN',payload:value})
                            }

                            else {
                                var index = arr.indexOf(value);
                                if (index > -1) {
                                    arr.splice(index, 1);
                                    dispatch({type:'delete',payload:value})
                                }
                                
                              
                            }
                        }}
                    
                    />
                        <div className="image" onClick={()=>{
                            onOpenModal(value)
                        }}>
                            <img src={value.imgurl}></img>
                        </div>
                        <div className="card-bodys">
                            <h6>{value.ex_type} </h6>
                            <h6>{value.ex_name}</h6>
                          
                        </div>
                        <div className="card-footers">
                            <div style={{ cursor: "pointer" }}> <i className="fa fa-plus" style={{ color: "green" }}></i>&nbsp;</div>
                            <div style={{ borderLeft: "1px solid gray", borderRight: "1px solid gray", paddingLeft: "20px", paddingRight: "20px", color: "blueviolet", cursor: "pointer" }}> <i className="fal fa-layer-plus"></i>&nbsp;</div>
                            <div style={{ cursor: "pointer" }} > <i className="fa fa-heart" style={{ color: 'red' }}></i>&nbsp;</div>

                        </div>

                    </div>
                    <div>

                        <Modal open={open} onClose={onCloseModal} center

                            styles={{
                                modal: {

                                    maxWidth: "unset",
                                    padding: "unset",
                                    overflow: 'hidden'

                                },
                                overlay: {
                                    background: "rgba(0, 0, 0, 0.5)"
                                },
                                closeButton: {
                                    background: "yellow"
                                }
                            }}

                        >
                                {console.log(value.videourl)}
                            <ReactPlayer controls url={video}
                                light={img}
                                playing
                            />
                        </Modal>
                    </div>   </>


            }) : ""}

        </>
    )
}

export default Card


