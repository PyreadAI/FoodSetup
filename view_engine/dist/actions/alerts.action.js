"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_constants_1 = require("../constants/alert.constants");
exports.alertActions = {
    success: success,
    error: error,
    clear: clear
};
function success(message) {
    return { type: alert_constants_1.alertConstants.SUCCESS, message: message };
}
function error(message) {
    return { type: alert_constants_1.alertConstants.ERROR, message: message };
}
function clear() {
    return { type: alert_constants_1.alertConstants.CLEAR };
}
//# sourceMappingURL=alerts.action.js.map