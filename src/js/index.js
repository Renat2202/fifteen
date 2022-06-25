const containerNode = document.getElementById('fifteen');
const itemNodes = Array.from(containerNode.querySelectorAll('.item'));
const countItems = 16;

if (itemNodes.length !== 16) {
    throw new Error(`Должно быть ровно ${countItems} 'items' в HTML`);
}

/** 1. Position */
itemNodes[countItems - 1].style.display = 'none';
let matrix = getMatrix(
    itemNodes.map((item) => Number(item.dataset.matrixId))
);

setPositionItems(matrix);

/** 2. Shuffle */

/** 3. Change positions by click */
/** 4. Chanege position by keyboard */
/** 4. Show won */


/**
 * Helpers
 */

function getMatrix(arr) {
    const matrix = [[], [], [], []];
    let y = 0;
    let x = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (x >= 4) {
            y++;
            x = 0;
        }
        matrix[y][x] = arr[i];
        x++;
    }

    return matrix;
}

function setPositionItems(matrix) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix.length; x++) {
            const value = matrix[y][x];
            const node = itemNodes[value - 1];
            setNodeStyles(node, x, y);
        }
    }
}

function setNodeStyles(node, x, y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`
}