import React from 'react';
import { Card, Typography, Button, Space } from 'antd';

interface Props {
  initialCount?: number; //Props đầu vào
}

interface State {
  count: number; 
}

class ClassLifecycle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: props.initialCount ?? 0 };
    console.log('🔵 constructor');
  }

  componentDidMount() {
    console.log('🟢 componentDidMount');
  }

  componentDidUpdate() {
    console.log('🟡 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('🔴 componentWillUnmount');
  }

  handleClick = (): void => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <Card title="Class Component" className="h-100" style={{ color: '#2e7d32', fontWeight: 'bold' }}>
        <Space direction="vertical">
          <Typography.Text>Count: <strong>{this.state.count}</strong></Typography.Text>
          <Button type="primary" danger block onClick={this.handleClick}>Increase</Button>
        </Space>
      </Card>
    );
  }
}

export default ClassLifecycle;
