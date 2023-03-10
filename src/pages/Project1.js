import React from 'react';
import Buttons from '../components/Buttons';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className='project'>
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <Buttons left={'/'} right={'/project-2'} />
            </div>
        </main>
    );
};

export default Project1;