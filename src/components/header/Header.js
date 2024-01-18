import React from "react";
import './Header.css';

const Header = () => {
    return(
        <>
            <div className="bg" ></div>
            <header className="body"  id="home">
                <div className="main">
                    <div>
                        <h1>TOP BLAZE WEB STUDIO</h1>
                        <h3>TOP BLAZE WHERE STUDENT PLAY VALORANT</h3>
                    </div>
                    <div className="intro-divider"></div>
                    <div className="btnsec">
                        <button>FACEBOOK </button>
                        <button>GITHUB</button>
                        <button>LINKEDIN</button>
                    </div>
                </div>
                
            </header>
            <div className="header-border"></div>
        </>
    );
}

export default Header;

