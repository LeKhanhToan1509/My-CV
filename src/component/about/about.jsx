import './about.css';
import AboutImg from '../../Assets/profile.jpg';
import Infor from './infor';

function About() {
    return ( 
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={"https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"} alt="" className='about__img'/>

                <div className="about__data">
                    <Infor />
                    <p className="about__description">
                        Fronend developer, I create web pages with UI / UX user interfave, i have years of experience and many clients are happy with the projects carried out.
                    </p>
                    <a href='https://github.com/LeKhanhToan1509' className="button button--flex" target='_blank'>Download CV
                    <i class="uil uil-file button__icon"></i>
                    </a>
                </div>
            </div>
        </section>
     );
}

export default About;