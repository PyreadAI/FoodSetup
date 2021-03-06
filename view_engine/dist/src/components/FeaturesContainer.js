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
var PresentationalFeature_1 = require("./PresentationalFeature");
var Features = /** @class */ (function (_super) {
    __extends(Features, _super);
    function Features(props) {
        return _super.call(this, props) || this;
    }
    Features.prototype.render = function () {
        return (React.createElement("div", { id: "feature" }, this.props.imgs.map(function (i, id) {
            return React.createElement(PresentationalFeature_1.Feature, { src: i.src, key: id });
        })));
    };
    return Features;
}(React.Component));
exports.Features = Features;
//# sourceMappingURL=FeaturesContainer.js.map