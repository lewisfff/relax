
class Game {

    constructor(args) {
        this.stage = document.getElementById('game-stage');
        this.circle = new Circle(this.stage);
    }

}

class Circle {

    constructor(stage, xpos = -1, ypos = -1, type = 'normal') {
        this.stage = stage;
        this.x = xpos;
        this.y = ypos;
        this.type = type;
        this.render();
    }

    _mapCoordinates() {
        if (this.x === -1 || this.y === -1) {
            this.x = Math.random();
            this.y = Math.random();
        }

        this.x *= 1000;
        this.y *= 1000;
    }

    render() {
        this._mapCoordinates();
        let div = document.createElement('div');
        div.classList.add('circle');
        div.style.transform = "translateX(" + this.x
            + "%) translateY(" + this.y + "%)";
        this.stage.prepend(div);
    }

}

window.addEventListener('load', () => new Game());
