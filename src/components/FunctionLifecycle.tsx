import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, Typography, Button, Space } from 'antd';

//Khai báo props (1.constructor, 2.props)
interface CounterProps {
  initialCount?: number; //Khởi tạo giá trị ban đầu của count
}

const FunctionLifecycle: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  //Cập nhật state cho props
  const [count, setCount] = useState<number>(initialCount); //Khởi tạo state count với giá trị ban đầu là initialCount
  const [clicks, setClicks] = useState<number>(0); //Gía trị mặc định là 0

  useEffect(() => {
    console.log('🔵 Mounted');
    return () => console.log('🔴 Unmounted');
  }, []); //useEffect được gọi khi component được mount và unmount nhằm theo dõi vòng đời

  useEffect(() => {
    console.log('🟡 Count updated:', count);
  }, [count]); //hook được gọi khi state count thay đổi

  const double = useMemo(() => {
    console.log('🔁 Calculating double');
    return count * 2;
  }, [count]); //hook này Tính double mỗi khi count thay đổi, nếu count không đổi thì sẽ không tính lại giá trị, tối ưu hiệu năng.

  const handleClick = useCallback(() => {
    setClicks((c) => c + 1);
    setCount((c) => c + 1);
  }, []); //hook này được gọi khi click button, tăng giá trị của count và clicks

  //Render component
  return (
    <Card title="Function Component" className="h-100" styles={{ header: { color: '#3f51b5', fontWeight: 'bold' } }}>
      <Space direction="vertical">
        <Typography.Text>Count: <strong>{count}</strong></Typography.Text>
        <Typography.Text>Double (memoized): <strong>{double}</strong></Typography.Text>
        <Typography.Text>Clicks: <strong>{clicks}</strong></Typography.Text>
        <Button type="primary" block onClick={handleClick}>Increase</Button>
      </Space>
    </Card>
  );
};

export default FunctionLifecycle;
