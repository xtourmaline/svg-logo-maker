const generateSVG = require("./generateSVG");

test("returns the correct shape object", () => {
    data = {
        text : "EX1",
        textColor : "white",
        shape : "circle",
        shapeColor : "pink",
    };
    expect(generateSVG(data)).toEqual(`
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="pink" />
    <text text-anchor="middle" x="150" y="130" font-size="90" fill="white">EX1</text>
</svg>
`)
});