import "../styles/layout.scss";
import "../styles/play.scss";

import Button from "./Button";

const links = ["home", "chef", "clothes", "doctor", "student"];

const Layout = ({ children }) => {
    return (
        <div role="main" className="container">
            <div className="buttonRow">
                {links.map((location) => (
                    <Button location={location} />
                ))}
            </div>
            {children}
        </div>
    );
};

export default Layout;
