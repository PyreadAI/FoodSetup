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
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(props) {
        return _super.call(this, props) || this;
    }
    Category.prototype.hideDiv = function () {
        document.getElementById('fitnessMeal').style.display = "none";
    };
    Category.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "col-md-2 col-sm-4 col-xs-6 col-xxs-12 clink", onClick: function (e) {
                _this.hideDiv();
            } },
            React.createElement("div", { id: this.props.id }, this.props.id)));
    };
    return Category;
}(React.Component));
exports.Category = Category;
//# sourceMappingURL=PresentationalCategory.js.map