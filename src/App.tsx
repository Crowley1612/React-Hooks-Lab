import React from 'react';
import FunctionLifecycle from './components/FunctionLifecycle';
import ClassLifecycle from './components/ClassLifecycle';
import { Row, Col, Typography, Layout } from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(to right, #e0f7fa, #ede7f6)', padding: '40px' }}>
      <Content style={{ padding: '40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <Title level={2}>React Lifecycle Practice</Title>
          <Text type="secondary">Compare function vs class components with lifecycle hooks</Text>
        </div>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 40 }}>
          <Col xs={24} md={12}><FunctionLifecycle initialCount={0} /></Col>
          <Col xs={24} md={12}><ClassLifecycle initialCount={0} /></Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;