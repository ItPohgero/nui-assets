import { ConfigProvider } from 'antd'
import React from 'react'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider theme={{
            token: {
                fontSize: 16,
                colorPrimary: '#52c41a',
            },
        }}>
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider