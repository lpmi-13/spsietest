export const addLineNumbers = (lines) =>
    lines.map((line, index) => {
        return { text: line, lineNumber: index + 1 };
    });

// some good old Fisher-Yates with a very hacky recursion to force no item to go back to its original position
export const shuffle = (arr) => {

    var i = arr.length,
        j,
        temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    let completelyRandomized = true;
    // in order to be a good exercise, we don't want any of the lines to show up in the same place
    // as the original code snippet, and sometimes after a sort, they can move back to where they started,
    // so if any of them do that, we force a re-shuffle until they're all in a different place from
    // the original
    arr.forEach((element, index) => {
        if (arr[index].lineNumber === index + 1) {
            completelyRandomized = false;
        }
    });
    if (completelyRandomized) {
        return arr;
    } else {
        return shuffle(arr);
    }
};

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
