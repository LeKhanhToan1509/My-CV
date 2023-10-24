import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_bco1o65', 'template_wg0mn5i', form.current, 'pQnAFT__QRNXrXlzh')
        .then(
            (result) => {
                console.log(result.text);
                alert('Email sent successfully');
                resetForm();
            },
            (error) => {
                console.log(error.text);
            }
            );
        window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setValue('');
        setEmailValue('');
        setContent('');
    };

    const nameRef = useRef();
    const emailRef = useRef();

    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        setValue('');
        nameRef.current.focus();
    };

    const [EmailValue, setEmailValue] = useState('');
    const EmailHandleChange = (e) => {
        setEmailValue(e.target.value);
    };

    const EmailHandleClick = () => {
        setEmailValue('');
        emailRef.current.focus();
    };

    const [content, setContent] = useState('');
    const ContentChange = (e) => {
        setContent(e.target.value);
    };

    const openNewWeb = () => {
        var url = 'https://www.facebook.com/LeKhanhToan1509';
        window.open(url, '_blank');
    };



    return (
        <div className="" id="contact">
            <div>
                <h2 className="section__title">Contact</h2>
                <span className="section__subtitle">Keep in touch with me!</span>
            </div>
            <div className="wrapper container">
            <div className="wrapper-card">
                    <h3 className="card__title">Talk to me</h3>
                    <div className="card">
                        <i className="uil uil-envelope-minus icon"></i>
                        <h4 className="card__atribute">Email</h4>
                        <h5 className="email">toanxm1509@gmail.com</h5>
                        <div className="card__icon" onClick={handleClick}>
                            <p className="text">Write me</p>
                            <i className="uil uil-arrow-right icon-right"></i>
                        </div>
                    </div>
                    <div className="card">
                        <i className="uil uil-facebook-f icon"></i>
                        <h4 className="card__atribute">Facebook</h4>
                        <h5 className="email">Le Khanh Toan</h5>
                        <div className="card__icon">
                            <p className="text" onClick={openNewWeb}>Contact me</p>
                            <i className="uil uil-arrow-right icon-right"></i>
                        </div>
                    </div>
                    <div className="card">
                        <i className="uil uil-whatsapp icon"></i>
                        <h4 className="card__atribute">Phone</h4>
                        <h5 className="email">0343150904</h5>
                        <div className="card__icon">
                            <p className="text">Call me</p>
                            <i className="uil uil-arrow-right icon-right"></i>
                        </div>
                    </div>
                </div>
                <div className="contact input">
                    <div>
                        <div>
                            <h3 className="title_content">Write me your project</h3>
                        </div>
                        <div>
                            <form ref={form}>
                                <div className="__input" ref = {nameRef}>
                                    <h5 className="title">Name</h5>
                                    <input
                                        name="from_name"
                                        type="text"
                                        value={value}
                                        onChange={handleChange}
                                        className="input__content"
                                        placeholder="Write your name"
                                    />
                                    {value.length > 0 && (
                                        <i className="uil uil-times-circle delete" onClick={handleClick}></i>
                                    )}
                                </div>

                                <div className="__input" ref = {emailRef}>
                                    <h5 className="title">Email</h5>
                                    <input
                                        name="from_email"
                                        type="text"
                                        value={EmailValue}
                                        onChange={EmailHandleChange}
                                        className="input__content"
                                        placeholder="Enter your email"
                                    />
                                    {EmailValue.length > 0 && (
                                        <i className="uil uil-times-circle delete" onClick={EmailHandleClick}></i>
                                    )}
                                </div>
                                <div className="__input">
                                    <h5 className="title">Project</h5>
                                    <textarea
                                        name="message"
                                        className="input__content"
                                        value={content}
                                        onChange={ContentChange}
                                        placeholder="Write your project"
                                        id="project"
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <button type="submit" className="button-send" onClick={sendEmail}>
                                    Send
                                    <i className="uil uil-message"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
