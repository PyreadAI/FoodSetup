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
var PresentationalCategory_1 = require("./PresentationalCategory");
var CategoryContainer = /** @class */ (function (_super) {
    __extends(CategoryContainer, _super);
    function CategoryContainer(props) {
        return _super.call(this, props) || this;
    }
    CategoryContainer.prototype.render = function () {
        return (React.createElement("div", { id: "category" },
            React.createElement("div", { className: "container" }, this.props.ids.map(function (i, key) {
                return React.createElement(PresentationalCategory_1.Category, { id: i, key: key });
            }))));
    };
    return CategoryContainer;
}(React.Component));
exports.CategoryContainer = CategoryContainer;
//# sourceMappingURL=CategoryContainer.js.map