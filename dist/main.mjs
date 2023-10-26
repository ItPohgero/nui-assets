// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = (props) => {
  const {
    onClick,
    type,
    variant,
    label = "label here",
    size
  } = props;
  const Variant = (e) => {
    switch (e) {
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
  const Size = (e) => {
    switch (e) {
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
  return /* @__PURE__ */ jsx("button", { type, onClick, className: `rounded-full ${Variant(variant)} ${Size(size)}`, children: label });
};
var Button_default = Button;

// src/components/Text.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Text = (props) => {
  const { value, color, size } = props;
  return /* @__PURE__ */ jsx2("p", { style: { color, fontSize: size }, children: value });
};
var Text_default = Text;

// src/main.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var CiuButton = (props) => /* @__PURE__ */ jsx3(Button_default, { ...props });
var CiuText = (props) => /* @__PURE__ */ jsx3(Text_default, { ...props });
export {
  CiuButton,
  CiuText
};
//# sourceMappingURL=main.mjs.map