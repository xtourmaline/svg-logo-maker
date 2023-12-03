let shapes = require("./shapes");

// creates an instance of a specific shape: circle, triangle, or square
function getShape(shape, color) {
    if (shape === "circle") {
        return Circle(color)
    } else if (shape === "triangle") {
        return Triangle(color)
    } else if (shape === "square") {
        return Square(color)
    }
}

function generateSVG(data) {
    const shape = getShape(data.shape, data.shapeColor)

    return `
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text text-anchor="middle" x="150" y="100" fill="${data.textColor}">${data.text}</text>
</svg>
`;
}