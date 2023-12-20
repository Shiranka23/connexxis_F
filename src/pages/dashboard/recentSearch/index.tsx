import React from 'react'
import styles from "../dashboard.module.css";
import { Col } from 'antd';
import { SVG } from '@/assest/svg';

function RecentSearch() {
    const recentSearches = [
        {
          id: 1,
          date: 'Thursday (06 Jul 2023)',
          description: 'Buy Homes in Ryon, Below Rs 1.5 Cr',
        },
        {
            id: 2,
            date: 'Thursday (06 Jul 2023)',
            description: 'Buy Homes in Canada, Below Rs 1.5 Cr ',
          },
          {
            id: 3,
            date: 'Thursday (06 Jul 2023)',
            description: 'Buy Homes in Ryon, Below Rs 1.5 Cr ',
          },
        // Add more items here if needed
      ];
  return (
    <>
    <Col className={`${styles.searchBox}`}>
    <h6>Thursday (06 Jul 2023)</h6>
    <ul>
    {recentSearches.map((searchItem) => (
          <li key={searchItem.id}>
            <span>
              <SVG.Clock />
            </span>
            {searchItem.description} <span><SVG.Frame/></span>
          </li>
        ))}
        
    </ul>
    </Col>
    <Col className={`${styles.searchBox}`}>
    <h6>Thursday (10 Jul 2023)</h6>
    <ul>
    {recentSearches.map((searchItem) => (
          <li key={searchItem.id}>
            <span>
              <SVG.Clock />
            </span>
            {searchItem.description} <span><SVG.Frame/></span>
          </li>
        ))}
        
    </ul>
    </Col>
    </>
  )
}

export default RecentSearch