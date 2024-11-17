function get(col, row) {
    return col * global_rows + row;
}
function rowValue(col, row) {
    let exponent = neighbors - 1;
    let sum = 0;
    let this_col = 0;
    let this_row = fixedIndex(row, global_rows);
    for (let col_mod = -span; col_mod <= span; col_mod++) {
        this_col = fixedIndex(col + col_mod, global_cols);
        sum += (Math.pow(states, exponent)) * cells[get(this_col, this_row)];
        exponent -= 1;
    }
    return sum;
}
function fixedIndex(x, modulus) {
    if (x >= 0 && x < modulus)
        return x;
    if (x < 0) {
        while (x < 0) {
            x += modulus;
        }
        ;
        return x;
    }
    while (x >= modulus) {
        x -= modulus;
    }
    return x;
}
function seedAutomata() {
    for (let col = 0; col < global_cols; col++) {
        cells[get(col, 0)] = Math.floor(Math.random() * states);
    }
}
function seedFilter() {
    for (let c = 0; c < filter_length; c++) {
        filter[c] = Math.floor(Math.random() * states);
    }
}
function calculateAutomata() {
    for (let r = 0; r < global_rows - 1; r++) {
        for (let c = 0; c < global_cols; c++) {
            cells[get(c, r + 1)] = filter[rowValue(c, r)];
        }
    }
}
function calculatePartialAutomata(start_row) {
    for (let r = start_row; r < global_rows - 1; r++) {
        for (let c = 0; c < global_cols; c++) {
            cells[get(c, r + 1)] = filter[rowValue(c, r)];
        }
    }
}
function clearAutomata() {
    cells = new Array(global_rows * global_cols).fill(0);
    plotAutomata();
}