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
var PresentationalOrderButton_1 = require("./components/PresentationalOrderButton");
var NavBarContainer_1 = require("./components/NavBarContainer");
var CarouselContainer_1 = require("./components/CarouselContainer");
var FeaturesContainer_1 = require("./components/FeaturesContainer");
var user_action_1 = require("../actions/user.action");
var react_redux_1 = require("react-redux");
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage(props) {
        var _this = _super.call(this, props) || this;
        _this.props.dispatch(user_action_1.userActions.logout());
        return _this;
    }
    MainPage.prototype.handleSubmit = function (action, info) {
        if (action === 'singup') {
            var name_1 = info.name, password = info.password, email = info.email;
            var dispatch = this.props.dispatch;
            if (name_1 && password) {
                user_action_1.userActions.signup(name_1, password, email);
            }
        }
        else {
            alert('enter');
        }
    };
    MainPage.prototype.render = function () {
        return (React.createElement("div", { id: "mainPage" },
            React.createElement(NavBarContainer_1.NavBar, { handleSubmit: this.handleSubmit.bind(this) }),
            React.createElement(PresentationalOrderButton_1.OrderButton, null),
            React.createElement(CarouselContainer_1.Carousel, { imgs: [
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad0', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad1', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad2', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad3', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad4', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad5', price: '', recipe: '' }
                ] }),
            React.createElement(FeaturesContainer_1.Features, { imgs: [
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad0', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad1', price: '', recipe: '' },
                    { src: 'images/food1.png', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'salad2', price: '', recipe: '' }
                ] })));
    };
    return MainPage;
}(React.Component));
function mapStateToProps(state) {
    var loggingIn = state.authentication.loggingIn;
    return {
        loggingIn: loggingIn
    };
}
var connectedLoginPage = react_redux_1.connect(mapStateToProps)(MainPage);
exports.MainPage = connectedLoginPage;
//# sourceMappingURL=MainPageContainer.js.map