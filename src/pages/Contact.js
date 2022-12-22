import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue Laplace</p>
                            <p>64200 Biarritz</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text='949494949494994' className='hover'>
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => alert('Numéro de téléphone copié !')}>34242424222242</p>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text='k.nimi73@gmail.com' className='hover'>
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => alert('Email copié !')}>k.nimi73@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                </div>
                <Buttons left={'/project-4'} right={''}/>
            </div>
        </main>
    );
};

export default Contact;