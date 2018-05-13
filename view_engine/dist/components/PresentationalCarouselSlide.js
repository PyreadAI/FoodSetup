"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Slide = /** @class */ (function (_super) {
    __extends(Slide, _super);
    function Slide(props) {
        return _super.call(this, props) || this;
    }
    Slide.prototype.render = function () {
        return (React.createElement("div", { className: "main-slide" },
            React.createElement("div", { className: "description pull-left" },
                React.createElement("p", null, this.props.description)),
            React.createElement("img", { src: this.props.src, className: "fade-in", alt: this.props.title }),
            React.createElement("div", { className: "title slide-in" }, this.props.title)));
    };
    return Slide;
}(React.Component));
exports.Slide = Slide;
//# sourceMappingURL=PresentationalCarouselSlide.js.map