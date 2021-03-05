import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
function NotFound() {

    const history=useHistory()
    useEffect(() => {
        history.push('/')
    }, [])    
    return (
        <div>
            hello woroldsdsd
        </div>
    )
}

export default NotFound
