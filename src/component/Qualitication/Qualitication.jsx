import './Qualification.css';

function Qualitication() {
    return ( 
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My persenal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification-active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                        Education
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualifition__subtitle">Intermediate</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    01.10.2023 - Present
                                </div>
                            </div>
                                <div className="">
                                    <span className="qualification__rounter"></span>
                                    <span className="qualification__line"></span>
                                </div>
                        </div>
                        <div className="qualification__data">
                            <div className=""></div>
                                
                            <div className="">
                                <span className="qualification__rounter"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">C/C++</h3>
                                <span className="qualifition__subtitle">Advanced</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    01.10.2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualifition__subtitle">Xuan Mai</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2022
                                </div>
                            </div>
                                <div className="">
                                    <span className="qualification__rounter"></span>
                                    <span className="qualification__line"></span>
                                </div>
                        </div>
                        <div className="qualification__data">
                            <div className=""></div>
                            
                            <div className="">
                                <span className="qualification__rounter"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div className="">
                                <h3 className="qualification__title">Final of ICPC</h3>
                                <span className="qualifition__subtitle">ICPC-PTIT contest</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    05.10.2023
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">2nd Prize in Maths</h3>
                                <span className="qualifition__subtitle">Maths using casio</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2022
                                </div>
                            </div>
                                <div className="">
                                    <span className="qualification__rounter"></span>
                                    <span className="qualification__line"></span>
                                </div>
                        </div>
                        <div className="qualification__data">
                            <div className=""></div>
                                <div className="">
                                    <span className="qualification__rounter"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            <div className="">
                                <h3 className="qualification__title">Secondary School</h3>
                                <span className="qualifition__subtitle">Xuan Mai A</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2022
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </section>
     );
}

export default Qualitication;