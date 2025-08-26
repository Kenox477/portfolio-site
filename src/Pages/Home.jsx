import React from "react";
import NavigationBar from "../Partials/NavigationBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Css/Home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomeContainer">
      <NavigationBar />
      <div className="hero-section">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ textShadow: "0px 0px 0px rgba(0,240,255,0.8)" }}
            animate={{ 
              textShadow: [
                "0px 0px 10px rgba(0,240,255,0.5)", 
                "0px 0px 25px rgba(0,240,255,1), 0px 0px 50px rgba(0,240,255,0.8)",
                "0px 0px 10px rgba(0,240,255,0.5)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kenan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Zovem se Kenan, imam 19 godina i student sam prve godine softverskog inženjeringa
            na Fakultetu informacijskih tehnologija ‘Džemal Bijedić’. Bavim se razvojem softvera,
            imam iskustva u C++, JavaScriptu, Reactu, PHP-u, Node.js-u, SQL-u i MongoDB-u.
            Radim i frontend i backend razvoj, a motivaciju pronalazim u stalnom učenju i
            usavršavanju svojih vještina.
          </motion.p>

          <motion.button
            className="cta-btn"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px #00f0ff, 0px 0px 50px #00f0ff",
              backgroundColor: "#00f0ff",
              color: "#000"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate("/contact")}
          >
            Započnimo &gt;
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
