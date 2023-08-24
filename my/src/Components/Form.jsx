import React from 'react';
// import "../Css/Contact.css"


const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Wyślij')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="container-form">

            <h2 className="tittle-form">Zapraszamy do kontaktu !</h2>
            <form onSubmit={onSubmit}>
                <div className='main-inputs'>
                    <div className="name">
                        <label className="form-label-name" htmlFor="name">
                            Imię:
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>

                    <div className="email">
                        <label className="form-label-email" htmlFor="email">
                            Email:
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>



                    <div className="message">
                        <label className="form-label-message" htmlFor="message">
                            Wiadomość:

                        </label>
                        <textarea className="form-message" id="message" required />
                    </div>


                    <button className="btnsubmit" type="submit">
                        {formStatus}
                    </button>
                    <div className='backjpg'></div>
                </div>
            </form>
        </div>
    )
}
export default ContactForm