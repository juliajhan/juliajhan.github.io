import React from 'react';
import './LinkBar.css';
import resumeIcon from '../images/resume-icon.png'
import resume from '../documents/resume.pdf'

const LinkBar = () => {
    return (
        <div className="link-bar">
            <a href={resume} target="_blank">
                <img src={resumeIcon} alt="Resume" className="icon"/>
            </a>
        </div>
    )
};

export default LinkBar;