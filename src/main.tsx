import Button from "./components/Button";
import Text from "./components/Text";

import { ButtonProps } from "./interface/ButtonProps";
import { TextProps } from "./interface/TextProps";

export const CiuButton = (props: ButtonProps) => <Button {...props} />
export const CiuText = (props: TextProps) => <Text {...props} />