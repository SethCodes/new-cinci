import React from 'react';
import '../css/AttractionDiv.css';


const AttractionCard = ({category, date, title, snippet}) => {
    return (
        <div className="attractionCard">
        <div className="attractDiv">
        <div className="category__date">
            <h6  >{category}</h6>
            <h6 >{date}</h6>
        </div>
        <h2 id="titleBlog">{title}</h2>
        <p >{snippet}</p>

            </div>
        </div>
    )
}

export default AttractionCard
