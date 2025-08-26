import React from "react";
import "../Css/RecentWork.css";
import NavigationBar from "../Partials/NavigationBar";

export const RecentWork = () => {
    return (
        <>
            <NavigationBar />
            <section className="recentwork-section">
                <div className="recentwork-container">
                    <h1>Recent Work</h1>
                    <p className="section-description">
                        Evo nekoliko mojih najnovijih projekata i profila gdje aktivno radim, učim i
                        objavljujem svoj kod.
                    </p>

                    <div className="projects-grid">
                        <div className="project-card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="GitHub"
                                className="project-icon"
                            />
                            <h2>GitHub Projekti</h2>
                            <p>
                                Ovdje možete pronaći sve moje projekte, od malih skripti do kompleksnih aplikacija.
                                Aktivno objavljujem kod i otvorene projekte.
                            </p>
                            <a
                                href="https://github.com/Kenox477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Pogledaj na GitHubu
                            </a>
                        </div>

                        <div className="project-card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/15467/15467037.png"
                                alt="LeetCode"
                                className="project-icon"
                            />
                            <h2>LeetCode Rješenja</h2>
                            <p>
                                Na LeetCode-u rješavam razne algoritamske zadatke i poboljšavam svoje vještine
                                programiranja i optimizacije koda.
                            </p>
                            <a
                                href="https://leetcode.com/u/user9899pP/"
                                target="_blank"
                                className="project-link"
                            >
                                Pogledaj na LeetCode-u
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
