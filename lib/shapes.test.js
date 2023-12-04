const shapes = require("./shapes");

describe ("Shape Class", () => {
    // tests the circle render() method
    test("circle render() works correctly", () => {
        const shape = new shapes.Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />')
    });

    // tests the triangle render() method
    test("triangle render() works correctly", () => {
        const shape = new shapes.Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="0 200, 150 0, 300 200" fill="blue" />')
    });

    // tests the square render() method
    test("square render() works correctly", () => {
        const shape = new shapes.Square();
        shape.setColor("white");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="white" />')
    });
});
    