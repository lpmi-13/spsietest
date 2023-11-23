import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Exercise from "./components/Exercise";

import { chefLines, clothesLines, doctorLines, studentLines } from "./content";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        <Route index path="/" element={<SplashScreen />} />
                        <Route
                            path="/chef"
                            element={<Exercise lines={chefLines} />}
                        />
                        <Route
                            path="/clothes"
                            element={<Exercise lines={clothesLines} />}
                        />
                        <Route
                            path="/doctor"
                            element={<Exercise lines={doctorLines} />}
                        />
                        <Route
                            path="/student"
                            element={<Exercise lines={studentLines} />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
};

export default App;
