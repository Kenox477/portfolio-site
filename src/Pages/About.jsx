import React from "react";
import "../Css/About.css";
import NavigationBar from "../Partials/NavigationBar";

export const About = () => {
    return (
        <>
            <NavigationBar/>
        <section className="about-section">
            <div className="about-container">
                 
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                        Zovem se <strong>Kenan</strong>, imam 19 godina i student sam prve godine softverskog inženjeringa 
                        na Fakultetu informacijskih tehnologija “Džemal Bijedić”. Bavim se razvojem softvera – 
                        od frontend dizajna do backend funkcionalnosti. Radim sa C++, JavaScript, React, PHP, Node.js, SQL i MongoDB. 
                        Moj cilj je stalno napredovati, učiti nove tehnologije i stvarati nove projekte.
                    </p>
                    <ul>
                        <li>Trenutni fokus:</li>
                        <li>Backend - Node.js</li>
                        <li>C++</li>
                    </ul>

                    <div className="skills">
                        <span>C++</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>PHP</span>
                        <span>Node.js</span>
                        <span>SQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
};
