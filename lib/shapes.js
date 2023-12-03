
class Shapes {
    constructor(shape, color) {
        this.__shape = shape;
        this.__color = color;
    }
}

class Circle extends Shapes {
    constructor(color) {
        super("circle", color)
    }

    render () {
        return `<circle cx="150" cy="100" r"100" fill="${this.__color}"`
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super("triangle", color)
    }

    render () {
        return `<polygon points="0 200, 150 0, 300 200" fill="${this.__color}"`
    }
}

class Square extends Shapes {
    constructor(color) {
        super("triangle", color)
    }

    render () {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.__color}" />`
    }
}

export {Circle, Triangle, Square}
