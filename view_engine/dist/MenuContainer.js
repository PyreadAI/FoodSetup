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
var SlidingNavBarContainer_1 = require("./components/SlidingNavBarContainer");
var CategoryContainer_1 = require("./components/CategoryContainer");
var ItemsContainer_1 = require("./components/ItemsContainer");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        return _super.call(this, props) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("div", { id: "menu" },
            React.createElement(SlidingNavBarContainer_1.SlidingNavBar, null),
            React.createElement(CategoryContainer_1.CategoryContainer, { ids: ['all', 'special', 'daily', 'feast', 'fitness', 'business'] }),
            React.createElement(ItemsContainer_1.ItemContainer, { imgs: [
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' },
                    { src: 'images/chickenbreast.jpg', description: 'some description here some description here some description here some description here some description here some description here some description here', title: 'Chicken Breast Salad', price: '15.50', recipe: '100g Chicken Breast, 200g Vegetables, 50g Bread Carbohydrate-24.6g  Calories-160.1kcal  Protein-33.2g  Fat-8.7g  Fibre-9.1g' }
                ] })));
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;
//# sourceMappingURL=MenuContainer.js.map