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
var Feature = /** @class */ (function (_super) {
    __extends(Feature, _super);
    function Feature(props) {
        return _super.call(this, props) || this;
    }
    Feature.prototype.render = function () {
        var background = "url('./" + this.props.src + "') no-repeat";
        return (React.createElement("div", null,
            React.createElement("div", { className: "feature-picture col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-12", style: { background: background, backgroundSize: 'cover' } }),
            React.createElement("div", { className: "feature-description col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-12" })));
    };
    return Feature;
}(React.Component));
exports.Feature = Feature;
//# sourceMappingURL=PresentationalFeature.js.map