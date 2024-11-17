function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("x = " + x + " y = " + y);
    if (y <= rule_digit_height) {
        userUpdateFilter(x, y);
    }
    else {
        target_col = Math.floor(x / pixel_width);
        target_row = Math.floor((y - rule_digit_height) / pixel_height);
        console.log("row = " + target_row + "     target_col = " + target_col);
        cells[get(target_col, target_row)]++;
        if (cells[get(target_col, target_row)] >= states)
            cells[get(target_col, target_row)] = 0;
        calculatePartialAutomata(target_row);
        plotAutomata();
    }
}
function userUpdateFilter(x, y) {
    let target_index = 0;
    if (x >= 0 && x <= canvas.width) {
        target_index = Math.floor((x - rule_right_adjustment) / rule_digit_width);
        filter[target_index]++;
        if (filter[target_index] >= states)
            filter[target_index] = 0;
    }
    plotRule();
    calculatePartialAutomata(0);
    plotAutomata();
}
function getWidth() {
    canvas.width = parseInt((document.getElementById("width")).value);
    pixel_width = canvas.width / global_cols;
}
function setWidth() {
    (document.getElementById("width")).value = canvas.width.toString();
}
function getHeight() {
    canvas.height = parseInt((document.getElementById("height")).value);
    pixel_height = canvas.height / global_rows;
}
function setHeight() {
    (document.getElementById("height")).value = canvas.height.toString();
}
function getCols() {
    global_cols = parseInt((document.getElementById("cols")).value);
    pixel_width = canvas.width / global_cols;
    reset();
}
function setCols() {
    (document.getElementById("cols")).value = global_cols.toString();
}
function getRows() {
    global_rows = parseInt((document.getElementById("rows")).value);
    pixel_height = canvas.height / global_rows;
    reset();
}
function setRows() {
    (document.getElementById("rows")).value = global_rows.toString();
}
function getChoices() {
    getWidth();
    getHeight();
    getRows();
    getCols();
}
function setChoices() {
    setWidth();
    setHeight();
    setRows();
    setCols();
}
function reset() {
    cells = new Array(global_rows * global_cols).fill(0);
    if (!mountain_mode)
        seedAutomata();
        calculateAutomata();
        plotAutomata();
        plotRule();
}
function newFilter() {
    seedFilter();
    calculateAutomata();
    plotAutomata();
    plotRule();
}
//# sourceMappingURL=input.js.map