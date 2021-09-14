import React from 'react';
import './Event.css';
import EventBckg from '../media/eventBckg.jpg'
import Table from './table.js';


const Event = () => {

    return (
        <div className="container-fluid" id="container" >

            {/* container 1 - header events */}

            <div className="container-header" style={{backgroundImage: `url(${ EventBckg })` }}>
                <div className="content1">
                    <h3>Events 2021</h3>
                    <p id="evenText">Wondering what's happenning in <span id="cinci">Cincinnati</span>? Check our list out</p>
                </div>
            </div>

            {/* container 2 - events */}

            <div id="container-event" className="container-fluid">
                <Table />
            </div>
        </div>
    )
}

export default Event
