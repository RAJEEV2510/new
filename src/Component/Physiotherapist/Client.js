import React from 'react'
import { Link } from 'react-router-dom'
import './Client.css'
function Client() {
    return (
        <>
            <div className="client">
                   {/**Client Left */}
                   <div className="client-left">

                       <button className="btn btn-primary w-75 mx-4 mt-5"><i class="fas fa-user-plus"></i>    <i className="fas user-plus"></i>
                           Add Client</button>
                        
                       <button className="btn btn-danger w-75 mx-4 mt-4"><i class="fas fa-sync"></i>
                            &nbsp;Refresh Client</button>

                </div>

                {/**ClientRight */}
                <div className="client-right">
                    <div className="client-searchbar">
                        <i className="fa fa-search"></i>
                        <input type="search" placeholder="Search client"></input>
                    </div>
                    <div className="client-header">
                        <h4 className="text-left p-4">Your clients</h4>
                    </div>
                    <div className="client-body">
                        <table className="table table-striped table-hover">
                            <thead>
                                <th>Name</th>
                                <th>Action</th>
                                <th>Email</th>
                                <th>Progress Report</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Rahul Bazaz</td>
                                    <td>
                                    <button className="btn btn-danger w-50">
                                        Del
                                    </button>
                                 
                                </td>
                                   <td>
                                       rahul@gmail.com
                                   </td>
                                   <td>
                                       <Link>View Report</Link>
                                   </td>
                                </tr>
                              
                                <tr>

                                </tr>

                                <tr>
                                    <td> Rahul Bazaz</td>
                                    <td>
                                    <button className="btn btn-danger w-50">
                                        Del
                                    </button>
                                 
                                </td>
                                   <td>
                                       rahul@gmail.com
                                   </td>
                                   <td>
                                       <Link>View Report</Link>
                                   </td>
                                </tr>
                              
                                <tr>

                                </tr>
                                <tr>
                                    <td> Rahul Bazaz</td>
                                    <td>
                                    <button className="btn btn-danger w-50">
                                        Del
                                    </button>
                                 
                                </td>
                                   <td>
                                       rahul@gmail.com
                                   </td>
                                   <td>
                                       <Link>View Report</Link>
                                   </td>
                                </tr>
                              
                                <tr>

                                </tr>
                                <tr>
                                    <td> Rahul Bazaz</td>
                                    <td>
                                    <button className="btn btn-danger w-50">
                                        Del
                                    </button>
                                 
                                </td>
                                   <td>
                                       rahul@gmail.com
                                   </td>
                                   <td>
                                       <Link>View Report</Link>
                                   </td>
                                </tr>
                              
                                <tr>

                                </tr>
                                <tr>
                                    <td> Rahul Bazaz</td>
                                    <td>
                                    <button className="btn btn-danger w-50">
                                        Del
                                    </button>
                                 
                                </td>
                                   <td>
                                       rahul@gmail.com
                                   </td>
                                   <td>
                                       <Link>View Report</Link>
                                   </td>
                                </tr>
                              
                                <tr>

                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
             

            </div>


        </>
    )
}

export default Client
