"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/main.tsx
var main_exports = {};
__export(main_exports, {
    CiuButton: function() {
        return CiuButton;
    },
    CiuText: function() {
        return CiuText;
    }
});
module.exports = __toCommonJS(main_exports);
// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = function(props) {
    var onClick = props.onClick, type = props.type, variant = props.variant, _props_label = props.label, label = _props_label === void 0 ? "label here" : _props_label, size = props.size;
    var Variant = function(e) {
        switch(e){
            case "primary":
                return "btn-primary";
            case "primary-line":
                return "btn-primary-line";
            case "secondary":
                return "btn-secondary";
            case "secondary-line":
                return "btn-secondary-line";
            default:
                return "btn-gost";
        }
    };
    var Size = function(e) {
        switch(e){
            case "xxs":
                return "py-1 px-2 text-xs";
            case "xs":
                return "py-2 px-3 text-sm";
            case "lg":
                return "py-3 px-5 text-lg";
            case "xl":
                return "py-3 px-5 text-xl";
            case "xxl":
                return "py-3 px-5 text-2xl";
            default:
                return "py-3 px-5 text-base";
        }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: type,
        onClick: onClick,
        className: "rounded-full ".concat(Variant(variant), " ").concat(Size(size)),
        children: label
    });
};
var Button_default = Button;
// src/components/Text.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Text = function(props) {
    var value = props.value, color = props.color, size = props.size;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
        style: {
            color: color,
            fontSize: size
        },
        children: value
    });
};
var Text_default = Text;
// src/main.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CiuButton = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button_default, _object_spread({}, props));
};
var CiuText = function(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text_default, _object_spread({}, props));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CiuButton: CiuButton,
    CiuText: CiuText
});
//# sourceMappingURL=main.js.map