// import {getShape, getText, generateSVG} from "./generateSVG"
// const shapes = require("./shapes");
const generateSVG = require("./generateSVG");

// describe ("testing generateSVG file", () => {
//     // tests getShape ()
//     test("returns the correct shape object", () => {
//         const shape = getShape("circle", "blue");
//         expect(shape).toEqual(new shapes.Circle("blue"))
//     });

//     // tests getText()
//     test("returns the correct text", () => {
//         const shape = new shapes.Triangle();
//         shape.setColor("blue");
//         expect(shape.render()).toEqual('<polygon points="0 200, 150 0, 300 200" fill="blue" />')
//     });
// });


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