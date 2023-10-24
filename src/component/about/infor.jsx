import './about.css';

function Infor() {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-award-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2 Months Working</span>
            </div>
            <div className="about__box">
            <i class="uil uil-briefcase about__icon"></i>
                <h3 className="about__title">Complete</h3>
                <span className="about__subtitle">48 + Projects</span>
            </div>
            <div className="about__box">
            <i class="uil uil-comment-question about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24 / 7</span>
            </div>
            
        </div> 
        
     );
     
}

export default Infor;