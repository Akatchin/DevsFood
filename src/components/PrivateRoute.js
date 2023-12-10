import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

 export default ({ children, ...rest}) => {
    const navigate = useNavigate();
    const token = useSelector(state => state.user.token);

    if(!token || token === "") {
        navigate('/login')
        return null;
    }
    return children
}


