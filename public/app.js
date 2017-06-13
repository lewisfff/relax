/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(args) {
        _classCallCheck(this, Game);

        this.stage = document.getElementById('game-stage');
        this.spawnCircle();
    }

    _createClass(Game, [{
        key: 'spawnCircle',
        value: function spawnCircle() {
            var _this = this;

            this.circle = new Circle(this.stage);
            this.circle.element.addEventListener('mouseover', function () {
                _this.circle.destroy();
                _this.spawnCircle();
            }, false);
        }
    }]);

    return Game;
}();

var Circle = function () {
    function Circle(stage) {
        var xpos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var ypos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'normal';

        _classCallCheck(this, Circle);

        this.stage = stage;
        this.x = xpos;
        this.y = ypos;
        this.type = type;
        this.render();
    }

    _createClass(Circle, [{
        key: '_mapCoordinates',
        value: function _mapCoordinates() {
            if (this.x === -1 || this.y === -1) {
                this.x = Math.random();
                this.y = Math.random();
            }

            this.x *= 1000;
            this.y *= 1000;
        }
    }, {
        key: 'render',
        value: function render() {
            this._mapCoordinates();
            this.element = document.createElement('div');
            this.element.classList.add('circle');
            this.element.style.transform = "translateX(" + this.x + "%) translateY(" + this.y + "%)";
            this.stage.prepend(this.element);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.stage.removeChild(this.element);
        }
    }]);

    return Circle;
}();

window.addEventListener('load', function () {
    return new Game();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);