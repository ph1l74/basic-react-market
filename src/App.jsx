import React from 'react';
import { Layout } from 'antd';
import Menu from './components/Menu';
import Catalogue from './components/Catalogue';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header style={{ background: "rgba(0,0,0,0)", marginBottom: 20 }}>
        <Menu />
      </Header>
      <Layout style={{ margin: '0px 200px' }}>
        {/* <Sider style={{ background: "rgba(0,0,0,0)" }} width={300}>Sider</Sider> */}
        <Content style={{ background: "rgba(0,0,0,0)" }}>
          <Catalogue />
        </Content>
      </Layout>
      <Footer style={{ background: "rgba(0,0,0,0)" }} />
    </Layout>
  );
}

export default App;
