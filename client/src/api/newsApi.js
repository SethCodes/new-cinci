import React from "react";
import '../components/About.css';
import Headlines from '../api/headlines.js'
 
export default function News() {
    return (
        <div className="container-fluid my-5">
            <Headlines/>
        </div>
    );
}
