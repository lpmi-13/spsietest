import "../styles/layout.scss";
import "../styles/play.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div role="main" className="container">
            <div className="buttonRow">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="home"
                >
                    <Link to="/">Home</Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="chef"
                >
                    <Link to="/chef">Chef</Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="clothes"
                >
                    <Link to="/clothes">Clothes</Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="doctor"
                >
                    <Link to="/doctor">Doctor</Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="student"
                >
                    <Link to="/student">Student</Link>
                </motion.button>
            </div>
            {children}
        </div>
    );
};

export default Layout;
