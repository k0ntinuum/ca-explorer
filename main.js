canvas = document.querySelector('canvas');
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
seedFilter();
setChoices();
if (!mountain_mode)
    seedAutomata();
calculateAutomata();
plotAutomata();
plotRule();
//# sourceMappingURL=main.js.map