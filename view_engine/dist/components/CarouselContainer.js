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
var PresentationalCarouselSlide_1 = require("./PresentationalCarouselSlide");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        return _super.call(this, props) || this;
    }
    Carousel.prototype.render = function () {
        return (React.createElement("div", { id: "specialCarousel", "data-flickity": '{ "wrapAround": true }' }, this.props.imgs.map(function (i, id) {
            return React.createElement(PresentationalCarouselSlide_1.Slide, { src: i.src, title: i.title, description: i.description, key: id });
        })));
    };
    return Carousel;
}(React.Component));
exports.Carousel = Carousel;
//# sourceMappingURL=CarouselContainer.js.map