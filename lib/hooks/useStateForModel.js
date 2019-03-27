var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
export function useStateForModel(initialValue) {
    var _a = React.useState(initialValue), getter = _a[0], setter = _a[1];
    var handleChange = function (event) {
        var _a;
        if (event.target) {
            var _b = event.target, name_1 = _b.name, value = _b.value;
            setter(__assign({}, getter, (_a = {}, _a[name_1] = value, _a)));
        }
        else {
            setter(__assign({}, getter, event));
        }
    };
    return [getter, handleChange];
}
