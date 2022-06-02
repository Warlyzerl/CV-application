import React from "react";



const Preview = (props) => {

    const {personalInfo} = props;
    const {education} = props;
    const {work} = props;
    const {eduAdd1} = props;
    const {education1} = props;
    const {workAdd1} = props;
    const {work1} = props;
    const {workAdd2} = props;
    const {work2} = props;

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
                <div><em> {education.degree} in {education.major} - {education.schoolFrom}<strong>-</strong>{education.schoolTo}</em></div>
                <div> GPA: {education.gpa}</div>

                {eduAdd1 ? 
                (<div>
                    <div>---</div>
                    <div><strong> {education1.school} </strong></div>
                    <div><em> {education1.degree} in {education1.major} - {education1.schoolFrom}<strong>-</strong>{education1.schoolTo}</em></div>
                    <div> GPA: {education1.gpa}</div>
                </div>) : (<div></div>)}

                <h3 className="section-head"> Work Experience </h3>
                <span className="workspan"><strong> {work.jobTitle},</strong> </span> <span><em>{work.employer},      {work.workFrom} - {work.workTo}</em></span>
                <div className="description">{work.description}</div>
                {workAdd1 ? 
                (<div>
                    <div>---</div>
                    <div> <span className="workspan"><strong> {work1.jobTitle},</strong> </span> <span><em>{work1.employer},      {work1.workFrom} - {work1.workTo}</em></span>
                <div className="description">{work1.description}</div></div>
                </div>) :
                <div></div>}
                {workAdd2 ? 
                (<div>
                    <div>---</div>
                    <div> <span className="workspan"><strong> {work2.jobTitle},</strong> </span> <span><em>{work2.employer},      {work2.workFrom} - {work2.workTo}</em></span>
                <div className="description">{work2.description}</div></div>
                </div>) :
                <div></div>}
            </div>
        </div>
    )
}

export default Preview;

