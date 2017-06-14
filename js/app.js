
class Game {

    constructor(args) {
        this.stage = document.getElementById('game-stage');
        this.circle = new Circle(this.stage);
        this.circleEvent();
    }

    spawnCircle() {
        this.circle = new Circle(this.stage);
        this.circle.element.addEventListener('mouseover', () => {
            this.circle.updateposition();
        },  false);
    }

}

class Circle {

    constructor(stage, xpos = -1, ypos = -1, type = 'normal') {
        this.stage = stage;
        this.x = xpos;
        this.y = ypos;
        this.type = type;
        this.create();
    }

    mapCoordinates() {
        if (this.x === -1 || this.y === -1) {
            this.x = Math.random();
            this.y = Math.random();
        }

        this.x *= 1000;
        this.y *= 1000;
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('circle');
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.transform = "translateX(" + this.x
            + "%) translateY(" + this.y + "%)";
        this.stage.prepend(this.element);
    }

    destroy() {
        this.stage.removeChild(this.element);
    }

}

window.addEventListener('load', () => new Game());
