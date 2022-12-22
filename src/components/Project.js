import React, { useEffect } from 'react';
import { useState } from 'react';
import { projectsData } from '../data/projectsData'

const Project = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData[projectNumber])
  
    return (
        <div className='project-main'>
            <div className="project-content">
                <h1>
                    {currentProject.title}
                </h1>
                <p>{currentProject.date}</p>
                <ul className='languages'>
                    {currentProject.languages.map((item) => <li key={item}>{item}</li>)}
                </ul>


            </div>
            <div className="img-content">
                <div className='img-container hover'>
                    <span>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.infos}</p>
                    </span>
                    <img src={currentProject.img} alt={currentProject.title} className='img' />
                </div>
                <div className="button-container">
                    <a href={currentProject.link} target='_blank' className='hover'>
                        <span className='button'>Voir le site</span>
                    </a>
                </div>
            </div>
          
        </div>
    );
};

export default Project;