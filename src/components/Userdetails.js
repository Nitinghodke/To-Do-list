import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { logout, selectUser } from "../redux/reducer/loginreducer"

function Userdetails() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
    return (
        <>
           <div>
               <h5>WEL-COME:{user.name}</h5>
           </div>
            <div className="form-group  text-center ">
                <button className="btn btn-danger my-4" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </>
    )
}

export default Userdetails
