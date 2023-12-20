// components/MyPagination.tsx
import React from 'react';
import { Pagination } from 'antd';

const MyPagination: React.FC = () => (
  <Pagination defaultCurrent={6} total={500} />
);

export default MyPagination;
