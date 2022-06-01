import React from "react";



const Preview = (props) => {

    const {personalInfo} = props;
    const {education} = props;
    const {work} = props;

    return (
        <div id="resume">
            <div id="resume-head">
                <h2 class="resume-name">{personalInfo.firstName} {personalInfo.lastName}</h2>
                <div>{personalInfo.phone} - {personalInfo.email} {personalInfo.link}</div>
                <div>{personalInfo.address1} {personalInfo.address2}</div>
                
            </div>
            <div id="resume-body">
                <h3 className="section-head"> Education and Training</h3>
                <div><strong> {education.school} </strong></div>
                <div> {education.degree} in {education.major} - {education.schoolFrom}<strong>-</strong>{education.schoolTo}</div>
                <div> GPA: {education.gpa}</div>
                <h3 className="section-head"> Work Experience </h3>
                <span className="workspan"><strong> {work.jobTitle}   </strong> </span> <span>{work.employer},      {work.workFrom} - {work.workTo}</span>
                <p className="description">{work.description}</p>
            </div>
        </div>
    )
}

export default Preview;

