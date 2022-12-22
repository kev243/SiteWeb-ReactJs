import React from 'react';

const SocialNetwork = () => {
    //fonction pour crée une annimation pour nos socials network
    const anim = () => {
        const icons = document.querySelectorAll('.social-network a ')

        icons.forEach((link) => {
            link.addEventListener('mouseover', (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = ""
            })


        })

    }
    return (
        <div className='social-network'>
            <ul className='content'>
                <a href='https://www.facebook.com' target='_blanck' rel='noopener noreferrer' className='hover'
                    onMouseOver={anim}

                >
                    <li className='fab fa-facebook'></li>
                </a>
                <a href='https://www.twitter.com' target='_blanck' rel='noopener noreferrer' className='hover'
                    onMouseOver={anim}>
                    <li className='fab fa-twitter'></li>
                </a>
                <a href='https://www.instagram.com' target='_blanck' rel='noopener noreferrer' className='hover'
                    onMouseOver={anim}>
                    <li className='fab fa-instagram'></li>
                </a>
            </ul>

        </div>
    );
};

export default SocialNetwork;