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
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 0
        };
        return _this;
    }
    MenuItem.prototype.minusFitnessButton = function () {
        if (this.state.count > 0) {
            this.setState(function (prevState) {
                var num = prevState.count;
                num--;
                return { count: num };
            });
        }
        else {
            alert("Number not valid");
        }
    };
    ;
    MenuItem.prototype.plusFitnessButton = function () {
        if (this.state.count < 31) {
            this.setState(function (prevState) {
                var num = prevState.count;
                num++;
                return { count: num };
            });
        }
        else {
            alert("Number exceed limit");
        }
    };
    MenuItem.prototype.render = function () {
        var _this = this;
        var url = "url('/" + this.props.img.src + "') no-reapeat;";
        return (React.createElement("div", { className: "col-md-4 col-sm-6 col-xs-6 col-xxs-12" },
            React.createElement("div", { id: "fitness1", className: "fitnessPic1 fitnessText1", style: { background: url } },
                React.createElement("p", { id: "fitnessTitle1" }, this.props.img.title),
                React.createElement("p", { id: "fitnessParagraph1" }, this.props.img.recipe),
                React.createElement("p", { id: "fitnessPrice1" }, this.props.img.price + 'CAD'),
                React.createElement("div", { id: "fitnessCart" },
                    React.createElement("div", { className: "Amount" }, "Amount"),
                    React.createElement("div", { id: "minusFitnessButton1", onClick: function (e) { _this.minusFitnessButton(); } },
                        React.createElement("div", { className: "minusMark" }, "-")),
                    React.createElement("div", { id: "numberFitnessDisplay1" },
                        React.createElement("div", { id: "fitnessDisplay1" }, this.state.count)),
                    React.createElement("div", { id: "plusFitnessButton1", onClick: function (e) { _this.plusFitnessButton(); } },
                        React.createElement("div", { className: "addMark" }, "+")),
                    React.createElement("div", { id: "cartFitnessButton1" },
                        React.createElement("div", { className: "cartDisplay" }, "add to cart"))))));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;
//# sourceMappingURL=PresentationalItem.js.map