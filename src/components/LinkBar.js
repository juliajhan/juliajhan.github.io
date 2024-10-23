import React from 'react';
import './LinkBar.css';
import resumeIcon from '../images/resume-icon.png'
import resume from '../documents/resume.pdf'
import githubIcon from '../images/github-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import emailIcon from '../images/email-icon.png'

const LinkBar = () => {
    return (
        <div className="link-bar">
            <a href={resume} target="_blank">
                <img src={resumeIcon} alt="Resume" className="icon"/>
            </a>
            <a href="https://linkedin.com/juliajhan/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn" className="icon"/>
            </a>
            <a href="https://github.com/jjh6283" target="_blank">
                <img src={githubIcon} alt="Github" className="icon"/>
            </a>
            <a href="mailto:juliajooheehan@gmail.com" target="_blank">
                <img src={emailIcon} alt="Email" className="icon"/>
            </a>
        </div>
    )
};

export default LinkBar;