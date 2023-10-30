import { Switch as SwitchAntd } from "antd";
import AntdProvider from "../theme/antd.provider";
import { SwitchProps } from "../interface/SwitchProps";
import styled from "styled-components";

export function Switch(props: SwitchProps): any {
    return (
        <AntdProvider>
            <BaseSwitch {...props} />
        </AntdProvider>
    );
}

const BaseSwitch = styled(SwitchAntd)`
    min-width: 40px;
    width: 40px;
    height: 24px;
    background: #e2e8f0;
    .ant-switch-handle {
        top: 2px;
        width: 20px;
        left: 2px;
        height: 20px;
        background: #ffffff;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
        border-radius: 100px;
    }
    .ant-switch-handle::before {
        border-radius: 100px;
    }
`;
