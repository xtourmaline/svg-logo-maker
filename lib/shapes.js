// parent class
class Shapes {
    constructor(shape, color) {
        // Prevent instantiation of Shapes directly
        if (this.constructor === Shapes) {
            throw new Error("Cannot instantiate abstract class");
        }

        this.__shape = shape;
        this.__color = color;
    }

    setColor(newColor) {
        this.__color = newColor;
    }

    // Abstract method
    render() {
        throw new Error("Not implemented");
    }
}

// child class of shapes
class Circle extends Shapes {
    constructor(color) {
        super("circle", color)
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.__color}" />`
    }
}

// child class of shapes
class Triangle extends Shapes {
    constructor(color) {
        super("triangle", color)
    }

    render() {
        return `<polygon points="0 200, 150 0, 300 200" fill="${this.__color}" />`
    }
}

// child class of shapes
class Square extends Shapes {
    constructor(color) {
        super("triangle", color)
    }

    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.__color}" />`
    }
}

// exports Circle, Triangle, and Square class
module.exports = {
    Circle, Triangle, Square
};
