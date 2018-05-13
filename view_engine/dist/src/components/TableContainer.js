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
var TableContainer = /** @class */ (function (_super) {
    __extends(TableContainer, _super);
    function TableContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.width = 100;
        _this.height = 70.2;
        return _this;
    }
    TableContainer.prototype.componentDidMount = function () {
        //alert('update')
        if (this.props.query !== null) {
            this.props.query();
        }
    };
    //UI set state does not include updating query function then not updating
    TableContainer.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.props.resultArray.length !== 0 && this.props.query !== null) {
            this.timer = window.setTimeout(function () {
                //alert('update')
                _this.props.query();
            }, 5000);
        }
    };
    TableContainer.prototype.tableGenerate = function () {
        //console.log('enter');
        //let width:number = document.getElementById('#course-table-container').clientWidth;
        //console.log(this.width);
        //console.log(JSON.stringify(this.props.resultArray));
        var style_obj = {};
        // style_obj['width'] = this.width.toString() + 'px';
        //let width_str:string = this.width.toString() + 'vw';
        style_obj['width'] = '100vw';
        var row_num = this.props.resultArray.length + 1;
        //console.log(row_num);
        var colunm_num = Object.keys(this.props.resultArray[0]).length;
        //console.log(colunm_num);
        var each_column_width = this.width / colunm_num;
        var each_column_height = this.height / row_num;
        var table_height = row_num * 10;
        style_obj['height'] = table_height.toString() + 'px';
        style_obj['backgroundColor'] = 'white';
        //console.log(JSON.stringify(style_obj));
        //generate actual table row
        var table_rows = [];
        var style_obj_row = { width: each_column_width.toString() + 'vw', height: '3vw', border: '1px solid black' };
        for (var i = 0; i < row_num; i++) {
            var tr_arr = [];
            for (var j = 0; j < colunm_num; j++) {
                if (i === 0) {
                    // create th
                    var th_text = Object.keys(this.props.resultArray[0])[j];
                    var th = React.createElement("th", { style: style_obj_row, key: j.toString() }, th_text);
                    tr_arr.push(th);
                }
                else {
                    //create td
                    var td_key = Object.keys(this.props.resultArray[i - 1])[j];
                    var td_text = void 0;
                    if (typeof (this.props.resultArray[i - 1][td_key]) === 'boolean') {
                        if (this.props.resultArray[i - 1][td_key]) {
                            td_text = 'yes';
                        }
                        else if (this.props.resultArray[i - 1][td_key] === null) {
                            td_text = 'null';
                        }
                        else {
                            td_text = 'no';
                        }
                    }
                    else if (this.props.resultArray[i - 1][td_key] === null) {
                        td_text = "not found";
                    }
                    else {
                        td_text = this.props.resultArray[i - 1][td_key];
                    }
                    var td = React.createElement("td", { style: style_obj_row, key: j.toString() }, td_text);
                    tr_arr.push(td);
                }
            }
            table_rows.push(React.createElement("tr", { key: i.toString() }, tr_arr));
        }
        //let table:any = <table style={style_obj}>{table_rows}</table>;
        //console.log(table_rows);
        return React.createElement("table", { style: style_obj },
            React.createElement("tbody", null, table_rows));
    };
    // componentDidMount(){
    //     const width_update:number = document.getElementById('course-table-container').clientWidth;
    //     this.width = width_update;
    // }
    TableContainer.prototype.render = function () {
        var id = 'table-container';
        // let tableDiv:any = <div id={id}></div>;
        // if(this.props.resultArray.length !== 0){
        //     let table:any = this.tableGenerate();
        //     tableDiv = <div id={id}>{table}</div>;
        // }
        var table = this.props.resultArray.length === 0 ? React.createElement("div", null) : this.tableGenerate();
        return React.createElement("div", { id: id }, table);
    };
    return TableContainer;
}(React.Component));
exports.TableContainer = TableContainer;
//# sourceMappingURL=TableContainer.js.map