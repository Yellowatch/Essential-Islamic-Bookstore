// ContactMe.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import './ContactMe.css';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';


const ContactMe = () => {

    const { t } = useTranslation();

    const form = useRef();

    // State variables for success and error messages
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let templateId = 'template_wwi1ee6'
        let publicKey = 'b64CyvxpIiL7d_bs1'

        emailjs.sendForm('service_v4ckj2d', templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                setErrorMessage('Something went wrong. Please email me at salih.hakki61@gmail.com.');
            });
    };

    const removeMessage = (e) => {
        setSuccessMessage('');
        setErrorMessage('');
    }

    return (
        <section id='contact' class="dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t("contact1")}</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{t("contact2")}</p>
                <form ref={form} onSubmit={handleSubmit} class="space-y-8 mb-4">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("name")}</label>
                        <input name="name" type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Salih Bak" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("email")}</label>
                        <input name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("subject")}</label>
                        <input name="subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t("subjectDesc")} required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("message")}</label>
                        <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t("messageDesc")} required></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t("sendMessage")}</button>
                </form>
                
                {/* Display success or error message */}
                {successMessage && <Alert variant="filled" severity="success" onClose={removeMessage}>{successMessage}</Alert>}
                {errorMessage && <Alert variant="filled" severity="error" onClose={removeMessage}>{errorMessage}</Alert>}
            </div>
        </section>
    );
};

export default ContactMe;
