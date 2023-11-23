import TextSegments from "./TextSegments";
import { addLineNumbers } from "../util";

const Exercise = ({ lines }) => {
    const amendedLines = addLineNumbers(lines);
    return (
        <div className="App">
            <h1>Put these statements in order.</h1>
            <p>
                {`remember the "Situation => Problem => Solution => Implications => Evaluation" pattern`}
            </p>
            (hint: the statements will turn green when they are in the correct
            position)
            <TextSegments lines={amendedLines} />
        </div>
    );
};

export default Exercise;
