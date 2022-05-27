import React from "react";
import './App.css';


function App() {
    return (
    <div className="App">
     <header className="header-container">
        <section className="nav_container ">
            <span className="text_name main-margin">Elizabeth González</span>
            <nav className="nav margin-left">
                {/*menu desktop*/}
                <ul className="nav_list">
                    <li className="nav_item">
                        <span className='nav_link'>Resume</span>
                    </li>
                    <li className="nav_item">
                        <span className='nav_link'>Projects</span>
                    </li>
                    <li className="nav_item">
                        <span className='nav_link'>Contact</span>
                    </li>
                </ul>
                {/*menu mobile*/}
                <div className="mobile-navigation">
                    <input type="checkbox" id="hamburger" />
                    <label for="hamburger" className="hamburger-menu"><span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span></label>
                    <div className="menu-mobile list-mobile">
                        <ul className="menu">
                            <li>Resume</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
     </header>
    </div>
  );
}

export default App;
