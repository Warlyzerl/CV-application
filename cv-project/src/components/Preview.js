import React from "react";



const Preview = (props) => {

    const {personalInfo} = props;
    const {education} = props;
    const {work} = props;
    const {eduAdd1} = props;
    const {education1} = props;

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
                <div>---</div>

                {eduAdd1 ? 
                (<div>
                    <div><strong> {education1.school} </strong></div>
                    <div> {education1.degree} in {education1.major} - {education1.schoolFrom}<strong>-</strong>{education1.schoolTo}</div>
                    <div> GPA: {education1.gpa}</div>
                </div>) : (<div></div>)}

                <h3 className="section-head"> Work Experience </h3>
                <span className="workspan"><strong> {work.jobTitle}   </strong> </span> <span>{work.employer},      {work.workFrom} - {work.workTo}</span>
                <div className="description">{work.description}</div>
            </div>
        </div>
    )
}

export default Preview;

