"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.PrivateRoute = function (_a) {
    var Component = _a.component, rest = __rest(_a, ["component"]);
    return (React.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) { return (localStorage.getItem('user')
            ? React.createElement(Component, __assign({}, props))
            : React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login', state: { from: props.location } } })); } })));
};
//# sourceMappingURL=PrivateRoute.js.map