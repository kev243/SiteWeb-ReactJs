import React from 'react';
import Buttons from '../components/Buttons';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className='project'>
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <Buttons left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    );
};
export default Project2;