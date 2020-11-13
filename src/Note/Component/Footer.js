import React from 'react'
import { Layout } from 'antd'
const {Footer} = Layout
class FooterComponent extends React.PureComponent{
    render(){
        return(
            <Footer style={{ textAlign: 'center' }}>CopyRight ©2020 Created by Ant Bool</Footer>
        )
    }
}
export default FooterComponent