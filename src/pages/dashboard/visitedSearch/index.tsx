import CardComponent from '@/components/Card'
import { Col, Row } from 'antd'
import React from 'react'

function VisitedSearch() {
    const array = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ];
  return (
    <>
    <Row>
    {array.map((item) => (
    <Col key={item.id} className="visitedSearch" md={8}>
    <CardComponent/>
    </Col>
    ))}
    </Row>
    </>
  )
}

export default VisitedSearch