import React, { useEffect, useState } from 'react'
import { Link,useLocation,useHistory } from 'react-router-dom'
import axiosInstance from '../../axios'
import jwt_decode from "jwt-decode";

export default function Navbar() {
    const history = useHistory()
    const [id,setId] = useState(null)
    const [avatar,setAvatar] = useState(null)
    let location = useLocation()
    const decode = () => {
        let decoded = jwt_decode(localStorage.getItem('refresh'))
        setId(decoded.user_id-1)
        axiosInstance.get(`/profile/${decoded.user_id-1}/`).then(res=>{
            setAvatar(res.data.avatar)
        },err=>{
            // console.log(err)
        })
    }
    useEffect(()=>{
        if(localStorage.getItem('refresh')){
            decode()
        }
    },[location])

    const logout = async()=>{
        await axiosInstance.post('logout/',{refresh_token:localStorage.getItem('refresh')})
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')
        history.push('/')
        }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 position-fixed top-0 w-100">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex w-50 justify-content-around'>
                    <Link to="/" className="navbar-brand" href="#">QuickFlow</Link>
                    <form className="d-flex w-75">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                {localStorage.getItem('token')?            
                <div className="btn-group">
                    <a type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={`${process.env.REACT_APP_API_URL_1}${avatar}`} className='border rounded-circle nav-avatar'/>
                        <span class="caret"></span>
                        {/* Right */}
                    </a>
                    <div className="dropdown-menu dropdown-menu-end drp-nav text-center">
                        <Link className="dropdown-item" to={`profile/${id}`} >Profile</Link>
                        <button className="dropdown-item" onClick={logout}>Log Out</button>
                    </div>
                </div>
                :
                <div>
                    <Link to="/login" className='btn btn-primary me-2'>Log In</Link>
                    <Link to="/signup" className='btn btn-light border'>Sign Up</Link>
                </div>
                }
            </div>
        </nav>
    )
}
