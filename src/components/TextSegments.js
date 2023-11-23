import { useEffect, useState } from "react";
import classNames from "classnames";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { reorder, shuffle } from "../util";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging && "lightgreen",

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "#e7e7e5",
    padding: grid,
});

const TextSegments = ({ lines }) => {
    console.log({ lines });
    useEffect(() => {
        setLinesOrder(shuffle(lines));
    }, [lines]);

    const [linesOrder, setLinesOrder] = useState(lines);

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            linesOrder,
            result.source.index,
            result.destination.index
        );

        setLinesOrder(items);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {linesOrder.map((item, index) => (
                            <Draggable
                                key={item.text}
                                draggableId={item.lineNumber.toString()}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        className={classNames(
                                            "code-line",
                                            index + 1 === item.lineNumber
                                                ? "correct-line"
                                                : "incorrect-line"
                                        )}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style,
                                            index + 1,
                                            item.lineNumber
                                        )}
                                    >
                                        {item.text}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TextSegments;
