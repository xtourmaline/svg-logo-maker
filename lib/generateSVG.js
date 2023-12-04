const shapes = require("./shapes");

// creates an instance of a specific shape: circle, triangle, or square
function getShape(shape, color) {
    if (shape === "circle") {
        return new shapes.Circle(color);
    } else if (shape === "triangle") {
        return new shapes.Triangle(color);
    } else if (shape === "square") {
        return new shapes.Square(color);
    }
}

function getText(shape, color, text) {
    if (shape === "circle" || shape === "square") {
        return `<text text-anchor="middle" x="150" y="130" font-size="90" fill="${color}">${text}</text>`;
    } else if (shape === "triangle") {
        return `<text text-anchor="middle" x="150" y="180" font-size="90" fill="${color}">${text}</text>`;
    }
}

function generateSVG(data) {
    const shape = getShape(data.shape, data.shapeColor);
    const text = getText(data.shape, data.textColor, data.text);

    return `
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${text}
</svg>
`;
}

module.exports = generateSVG;