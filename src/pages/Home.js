import React from 'react';
import Buttons from '../components/Buttons';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
            <Mouse />
            <div className='home'>
                <Navigation />
                <SocialNetwork />
                <div className='home-main'>
                    <div className='main-content'>
                        <motion.h1 drag onDragEnd dragConstraints={{
                            left: -250,
                            right: 950,
                            top: -250,
                            bottom: 250
                        }

                        }>FS AGENCY</motion.h1>
                        <h2>
                            <DynamicText />
                        </h2>

                    </div>
                </div>
                <Buttons right={'/project-1'} />
            </div>
        </div>
    );
};

export default Home;