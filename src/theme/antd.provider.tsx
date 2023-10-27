import { ConfigProvider } from 'antd'
import React from 'react'
import { color } from '../hooks'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider theme={{
            token: {
                fontSize: 16,
                colorPrimary: '#52c41a',
            },
            components: {
                Checkbox: {
                    borderRadius: 5,
                    algorithm: true,
                }
            }
        }}>
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider