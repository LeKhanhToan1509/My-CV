
import { useState } from 'react';
import './header.css';

function Header() {
    /* toggle menu */
    const [Toggle, showMenu] = useState(false);
    const [line, setLine] = useState(0);

    const handleClick = (e) => {
        setLine(e)
    }

    return ( 

        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Le Khanh Toan</a>  

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item" onClick={() => handleClick(1)}>
                            <a href="#home" className={line === 1 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon">
                                </i>
                                    Home
                                <div className={line === 1 ? "line-active" : "line"}></div>
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => handleClick(2)}>
                            <a href="#about" className={line === 2 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon">
                                </i>
                                    About
                                <div className={line === 2 ? "line-active" : "line"}></div>
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => handleClick(3)}>
                            <a href="#skills" className={line === 3 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon">
                                </i>
                                    Skills
                                <div className={line === 3 ? "line-active" : "line"}></div>
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => handleClick(4)}>
                            <a href="#services" className={line === 4 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon">
                                </i>
                                    Sevices
                                <div className={line === 4 ? "line-active" : "line"}></div>
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => handleClick(5)}>
                            <a href="#portfolio" className={line === 5 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon">
                                </i>
                                    Portfolio
                                <div className={line === 5 ? "line-active" : "line"}></div>
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => handleClick(6)}>
                            <a href="#contact" className={line === 6 ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon">
                                </i>
                                    Contact
                                <div className={line === 6 ? "line-active" : "line"}></div>
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>              
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps "></i>
                </div>
            </nav>

        </header>
     );
}

export default Header;