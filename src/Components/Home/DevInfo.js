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
                <p className='dev-blurb'>Erika is a developer from Utah.</p>
                <div className='dev-link-container'>
                    <a href='https://github.com/erikamanning' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithubSquare}/>
                    </a>
                    <a href='https://www.linkedin.com/in/erikamanning/' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                    </a>
                </div>
            </div>

            <div className='dev-card'>
                <img className='dev-img' src={danphoto}/>
                <p className='dev-blurb'>Dan is a graphic artist and developer from the Philadelphia region.</p>
                <div className='dev-link-container'>
                    <a href='https://github.com/danieltlangston' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithubSquare}/>
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-langston-556556210/' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DevInfo;