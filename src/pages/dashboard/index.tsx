import LayoutPage from '@/components/Layout/layout'
import { Col, Tabs } from 'antd'
import React from 'react'
import styles from "./dashboard.module.css";
import RecentSearch from './recentSearch';
import VisitedSearch from './visitedSearch';

const onChange = (key: string) => {
  console.log(key);
};

const items= [
  {
    key: '1',
    label: (
      <Col className={`${styles.tabHeading}`}>
      <p>Recent Searches </p> <span className={`${styles.counter}`}>3</span></Col>),
    children: <RecentSearch/> ,
  },
  {
    key: '2',
    label:(
      <Col className={`${styles.tabHeading}`}>
      <p>Recently Visited Properties </p> <span className={`${styles.counter}`}>3</span></Col>),
    children: <VisitedSearch />,
  },
  {
    key: '3',
    label: (
      <Col className={`${styles.tabHeading}`}>
      <p>Favorite Properties </p> <span className={`${styles.counter}`}>3</span></Col>),
    children: <VisitedSearch/>,
  },
];

export default function Dashboard() {
  return (
    <>
    <LayoutPage>
   <Col style={{width:"100%"}}>
   <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="tabsPannel" />
   </Col>
    </LayoutPage>
    </>
  )
}
