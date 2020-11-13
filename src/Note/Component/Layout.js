import React from 'react'
import {Layout} from 'antd'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import './layout.css'
const {Content} = Layout
class LayoutComponent extends React.PureComponent{
    render() {
        return(
            <Layout className="layout">
                <HeaderComponent/>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">{this.props.children}</div>
                </Content>
                <FooterComponent/>
            </Layout>
        )
    }
}
export default LayoutComponent