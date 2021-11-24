import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DevInfo.css'

const DevInfo = () => {
    return(
        <div className='dev-info-container'>
            <div className='dev-card'>
                <img />
                <p className='dev-blurb'></p>
                <div className='dev-link-container'>
                    <a>
                        <FontAwesomeIcon />
                    </a>
                    <a>
                        <FontAwesomeIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DevInfo;