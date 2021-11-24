import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import './DevInfo.css'
import danphoto from '../../Assets/dan-dev-photo.png'
import erikaphoto from '../../Assets/erika-dev-photo.jpg'

const DevInfo = () => {
    return(
        <div className='dev-info-container'>
            <div className='dev-card'>
                <img className='dev-img' src={erikaphoto}/>
                <p className='dev-blurb'>Erika is a developer from utah</p>
                <div className='dev-link-container'>
                    <a href='' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithubSquare}/>
                    </a>
                    <a href='' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                    </a>
                </div>
            </div>

            <div className='dev-card'>
                <img className='dev-img' src={erikaphoto}/>
                <p className='dev-blurb'>Erika is a developer from utah</p>
                <div className='dev-link-container'>
                    <a href='' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithubSquare}/>
                    </a>
                    <a href='' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DevInfo;