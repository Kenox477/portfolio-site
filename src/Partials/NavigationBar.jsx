import "../Css/NavigationBar.css";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    
    const navigate = useNavigate(); 

    return (
        <nav className="NavigationBar">
            <ul className="nav-links">
                <li><a onClick={() => navigate("/")}>Home</a></li>
                <li><a onClick={() => navigate("/about")}>About</a></li>
                <li><a onClick={() => navigate("/recent-work")}>Recent Work</a></li>
                <li><a onClick={() => navigate("/contact")}>Get In Touch</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
