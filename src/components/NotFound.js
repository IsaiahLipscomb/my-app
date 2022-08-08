import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return(
            <div className="not-found">
                <h2>Sorry</h2>
                <p>Page cannot be found</p>
                <Link to='/'>Go back to Home</Link>
            </div>
    );

}

export default NotFound;