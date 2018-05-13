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
var MainPageContainer_1 = require("./MainPageContainer");
var MenuContainer_1 = require("./MenuContainer");
var react_router_dom_1 = require("react-router-dom");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this) || this;
    }
    Main.prototype.render = function () {
        return React.createElement(react_router_dom_1.HashRouter, { history: react_router_dom_1.hashHistory },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: MainPageContainer_1.MainPage }),
                React.createElement(react_router_dom_1.Route, { path: "/menu", component: MenuContainer_1.Menu })));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=main.js.map