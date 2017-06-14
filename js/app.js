
class Game {

    constructor(args) {
        this.stage = document.getElementById('game-stage');
        this.circle = new Circle(this.stage);
        this.circleEvent();
    }

    circleEvent() {
        this.circle.element.addEventListener('mouseover', () => {
            this.circle.updatePosition();
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
        this.x = Math.random() * 1000;
        this.y = Math.random() * 1000;
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('circle');
        this.updatePosition();
    }

    updatePosition() {
        this.mapCoordinates();
        this.element.style.transform = "translate(" + this.x
            + "%, " + this.y + "%)";
        this.stage.prepend(this.element);
    }

    destroy() {
        this.stage.removeChild(this.element);
    }

}

window.addEventListener('load', () => new Game());
