import React from 'react'
import {NavLink , useLocation} from 'react-router-dom'
import { Layout , Menu} from 'antd'

const {Header} = Layout
const HeaderComponent = () => {
    const location = useLocation();
    const pathName = location.pathname
    console.log(pathName);
    return (
        <Header>
            <NavLink to="/">
                <div className="logo" />
            </NavLink>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName}>
                <Menu.Item key="/Home">
                    <NavLink to="/Home">
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/Write">
                    <NavLink to="/Write">
                        Write note
                    </NavLink>
                </Menu.Item>
            </Menu>
            </Header>
    )
}
export default React.memo(HeaderComponent)