import React, { useEffect, useState } from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import Pagination from './Pagination'
import Paginate from './Paginate'
import axios from 'axios'
function Body() {

    const [data, setData] = useState(undefined);
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage, setPostPerpage] = useState(6);
    const [totalPosts, setTotalPosts] = useState();
    const [initialData, setInitialData] = useState(undefined)
    const [status, changeStatus] = useState(false);
    const [pageNumberLimit, setPageNumberLimit] = useState(6);
    const [maxpageNumberLimit, setmaxpageNumberLimit] = useState(6);
    const [minpageNumberLimit, setminPageNumberLimit] = useState(0);
    // const [paginateStatus, setpaginateStatus] = useState(false);
    const [easy, setEasy] = useState(false);
    const [hard, setHard] = useState(false);
    const [medium, setMedium] = useState(false);
    const [expert, setExpert] = useState(false);

    //set array
    const [myarr, setmarrayData] = useState([]);

    //useEffect use generlly when we want to rendered the things after some change
    useEffect(() => {

        axios.get("http://befit.digitaldarwin.in/myphio-user-management/v1/user/exercisepage", {
            headers: {
                "pageno": 1
            }
        }).then(res => {
            console.log(res)
            return res.data
        }).then((data) => {

            console.log(data)
            setData(data);
            setInitialData(data)
            if (myarr.length == 0) {
                setTotalPosts(data.length);
            }
            else {
                setTotalPosts(myarr.length)
            }

        })

        changeStatus(false)


    }, [status])


    //change data according easy medium and hard
    useEffect(() => {

        if (easy == false && hard == false && expert == false && medium == false) {
            document.getElementById('search').style.display = "block";
        }
        else {
            document.getElementById('search').style.display = "none";

        }

    }, [easy, hard, expert, medium])


    function SearchQuery(e) {

        let inputValue1 = e.target.value.toLowerCase();
        let inputValue2 = e.target.value.toUpperCase()
        if (e.target.value == "") {
            changeStatus(true);

            return;
        }
        //http://localhost:3000/cards?title=${inputValue1}&${inputValue2}
        axios.get('http://befit.digitaldarwin.in/myphio-user-management/v1/user/searchexercise',
             {
                headers: {
                    "req": inputValue1,
            }
            }).then(res => {
                
                return res.data
            }).then((data) => {
                setData(data)
                // setpaginateStatus(true)
            })

    }


    function InitialStage() {
        setData(initialData)

    }

    //Get current Posts
    const indexOfLastPost = currentPage * postPerPage;
    console.log(indexOfLastPost)
    const indexofFirstPost = indexOfLastPost - postPerPage;

    //decide or filter the data
    const currentPosts = myarr.length != 0 ? myarr.slice(indexofFirstPost, indexOfLastPost) : data ? data.slice(indexofFirstPost, indexOfLastPost) : [];
    console.log(myarr)
    //change page
    const paginate = (number) => {
        setcurrentPage(number)
    }

    const handleNext = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxpageNumberLimit) {
            setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);

            setminPageNumberLimit(minpageNumberLimit + pageNumberLimit)

        }
    }
    const handlePrevious = () => {

        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minpageNumberLimit - pageNumberLimit)

        }


    }

    return (
        <div className="body">
            {/**body-left-part */}
            <div className="body-left-part">
                {/**Two buttons */}
                <div className="firstButton">
                    <button type="button" class="btn btn-primary">Create Exercises</button>
                </div>
                <div className="secondButton">
                    <button>Request Exercises</button>
                </div>
                {/**Filter1 */}
                <div className="filter1">
                    <h5>Choose collection</h5>
                    <input type="radio" name="type-filter1"></input> &nbsp;&nbsp;Search<br></br>
                    <input type="radio" name="type-filter1"></input>&nbsp;&nbsp; Favourite
                    </div>
                {/**Exercise filter*/}
                <h4 className="excerise"> Excercise Filters</h4>
                {/**Filter2 */}
                <div className="filter2">

                    <h5>Difficulty</h5>
                    <input type="checkbox" name="type-filter2" checked={easy}
                        onChange={() => {

                            if (easy == false) {
                                setEasy(true)
                                let newdata = data.filter((value) => value.ex_type == "easy")
                                myarr.push(...newdata);
                            }
                            else {
                                setEasy(false)

                                let newdata = myarr.filter((value) => { return value.ex_type != "easy" })
                                console.log(newdata)
                                setmarrayData(newdata);
                            }

                        }}
                    ></input> &nbsp;&nbsp;Easy<br></br>
                    <input type="checkbox" name="type-filter2" checked={medium}

                        onChange={() => {

                            if (medium == false) {
                                setMedium(true)
                                let newdata = data.filter((value) => value.ex_type == "medium")
                                myarr.push(...newdata);
                            }
                            else {
                                setMedium(false)
                                setData(initialData)
                                let newdata = myarr.filter((value) => { return value.ex_type != "medium" })

                                setmarrayData(newdata);

                            }

                        }}
                    ></input>&nbsp;&nbsp;Medium<br></br>
                    <input type="checkbox" name="type-filter2" checked={hard}

                        onChange={() => {

                            if (hard == false) {
                                setHard(true)
                                let newdata = data.filter((value) => value.ex_type == "hard")
                                myarr.push(...newdata);
                            }
                            else {
                                setHard(false)

                                let newdata = myarr.filter((value) => { return value.ex_type != "hard" })

                                setmarrayData(newdata);
                            }

                        }}></input> &nbsp;&nbsp;Hard<br></br>
                    <input type="checkbox" name="type-filter2" checked={expert}

                        onChange={() => {


                            if (expert == false) {
                                setExpert(true)
                                let newdata = data.filter((value) => value.ex_type == "expert")
                                myarr.push(...newdata);
                            }
                            else {
                                setExpert(false)

                                let newdata = myarr.filter((value) => { return value.ex_type != "expert" })

                                setmarrayData(newdata);
                            }

                        }}

                    ></input>&nbsp;&nbsp;Expert
                    </div>
            </div>
            {/**body-right-part */}
            <div className="body-right-part">
                <div className="search-bar" >
                    {/* <i className="fa fa-search" style={{position:"relative",left:"-10px",top:"-3px"}}></i> */}
                    <input type="search" onBlur={(e) => {
                        e.target.value = ""
                    }} onChange={(e) => {
                        SearchQuery(e)
                        setEasy(false);
                    }} id="search" className="search" placeholder="Search Exercises ('\')"></input>

                </div>
                <div className="body-main-part">

                    <Card Data={currentPosts} ></Card>
                </div>
                {/* <Pagination Data={data}></Pagination> */}
                <div className="Body-lower-Part">
                    <Paginate postPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage}

                        pageNumberLimit={pageNumberLimit}
                        maxpageNumberLimit={maxpageNumberLimit}
                        minpageNumberLimit={minpageNumberLimit}
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                    ></Paginate>
                </div>
            </div>
        </div>
    )
}

export default Body
