import React ,{useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector('.formMessage')
        emailjs.sendForm('service_mlirvt8', 'template_k32yaad', form.current,
            '0QarXTsCTEXcrwmHq')
            .then((result) => {
                console.log(result.text);
                form.current.reset()
                formMess.innerHTML = "<p class='success'>Message envoyer</p>";
                //faire disparaitre notre message success
                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500);


            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p class='error'>Une erreur s'est produite veuillez reessayer </p>";
                //faire disparaitre notre message  error
                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500);
            });
    };

    return (
        <div className="form-container">
            <h1>Contactez-nous</h1>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>Nom</label>
                <input type="text" name="name" required autoComplete='off' id='name' />
                <label>Email</label>
                <input type="email" name="email" required autoComplete='off' id='email' />
                <label>Message</label>
                <textarea name="message" id='mess' />
                <input type="submit" value="Envoyer" className='hover button' />
            </form>
            <div className="formMessage">

            </div>
        </div>

    );
};

export default ContactForm;