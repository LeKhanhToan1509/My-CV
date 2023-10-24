import './about.css';
import AboutImg from '../../Assets/profile.jpg';
import CV from './John-Cv.pdf';
import Infor from './infor';

function About() {
    return ( 
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className='about__img'/>

                <div className="about__data">
                    <Infor />
                    <p className="about__description">
                        Fronend developer, I create web pages with Ui / UX user interfave, i have years of experience and many clients are happy with the projects carried out.
                    </p>
                    <a download={CV} className="button button--flex">Download CV
                    <i class="uil uil-file button__icon"></i>
                    </a>
                </div>
            </div>
        </section>
     );
}

export default About;