import React from 'react'
import {NavLink} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import MenuConfig from './config/menu'

const {Header, Content, Footer, Sider} = Layout

class Admin extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map(item => {
      return <Menu.Item key={item.key} title={item.title}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
            {this.state.menuTreeNode}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#71d677', padding: 0, fontSize: '20px'}}>React 进阶</Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 560}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin