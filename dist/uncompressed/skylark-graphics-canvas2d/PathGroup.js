define([
    "./canvas2d",
    "./primitives/fabric"
], function(canvas2d,fabric) {
    return canvas2d.PathGroup = fabric.PathGroup;
});