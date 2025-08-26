import React from "react";
import "../Css/Contact.css";
import NavigationBar from "../Partials/NavigationBar";

export const Contact = () => {
    return (
        <>
            <NavigationBar />
            <section className="contact-section">
                <div className="contact-container">
                    <h1>Kontakt</h1>
                    <p className="contact-description">
                        Možeš me pronaći i pratiti na sljedećim platformama:
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/Kenox477" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /> GitHub
                        </a>
                        <a href="https://leetcode.com/u/user9899pP/" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/15467/15467037.png" alt="LeetCode" /> LeetCode
                        </a>
                        <a href="https://www.instagram.com/__kenox/" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /> Instagram
                        </a>
                        <a href="https://x.com/Kenox72167047" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Twitter" /> Twitter
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
