import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const Button = ({ location }) => {
    const filteredLocation = location === "home" ? "" : location;
    return (
        <Link to={`/${filteredLocation}`}>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={location}
            >
                {capitalized(location)}
            </motion.button>
        </Link>
    );
};

export default Button;
