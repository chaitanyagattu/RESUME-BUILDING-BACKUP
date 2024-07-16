import React, { useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Blueprint = () => {
    let navigate = useNavigate();
    useEffect(() => {
        const cookies = Cookies.get("token");
        if (!cookies) {
            navigate("/login"); // Redirect to the ogin page if no token is found
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>Blueprint</div>
    )
}

export default Blueprint