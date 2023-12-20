import HomeLayoutPage from '@/components/Layout/homeLayout'
import { Col, Row } from 'antd'
import React from 'react'
import DropDownInput from './component/textInput'
import SelectInputField from './component/selectInput'
import styles from "./search.module.css"
import FilledButtonComponent from '@/components/Button'
import { SVG } from '@/assest/svg'
import SearchFooterComponent from '@/components/Layout/searchFooter'
import { IMAGES } from '@/assest/images'
import Image from 'next/image'
import SearchCardComponent from './component/card'
import MyPagination from './component/pagination'
// import PaginationComponent from './component/pagination'

export default function SearchResult() {
  const array = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  const budgetOptions = [
    { value: 'budget', label: 'Budget' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },

  ];
  const sorting = [
    { value: 'sort', label: 'Sort' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'newest', label: 'Newest' },

  ];
  const area = [
    { value: 'area', label: 'Area' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },

  ];
  const bedroom = [
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },

  ];
  const construction = [
    { value: 'construction', label: 'Construction' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },

  ];

  const handleSelectChange = (value: string) => {
    console.log(`Selected: ${value}`);
    // Do something with the selected value
  };
  return (
    <>
      <HomeLayoutPage>
        <Row className={`${styles.filterHead}`} style={{
          borderBottom: "1px solid #E5E5E5",
          paddingBottom: "10px"
        }}>
          <Col md={12}>
            <Col >
              <DropDownInput />
            </Col>
          </Col>
          <Col md={12}>
            <Col className={`${styles.searchFilter}`}>
              <SelectInputField defaultValue="budget" options={budgetOptions} onChange={handleSelectChange} />
              <SelectInputField defaultValue="area" options={area} onChange={handleSelectChange} />
              <SelectInputField defaultValue="bedroom" options={bedroom} onChange={handleSelectChange} />
              <SelectInputField defaultValue="construction" options={construction} onChange={handleSelectChange} />

              <FilledButtonComponent className={`${styles.filterBtn}`}><SVG.Filter /> All Filters</FilledButtonComponent>

            </Col>
          </Col>
        </Row>
        <Col className={`${styles.mainLayout}`}>
          <Row>
            <Col md={12}>
              <Row>
                <Col md={24}>
                  <h4 className={`${styles.searchHeading}`}>Pittsburgh, PA: Apartment for sale</h4>
                </Col>
                <Col md={24}>
                  <Col className="filterTag">
                    <p>4 Apartment for Sale</p>
                    <SelectInputField defaultValue="sort" options={sorting} onChange={handleSelectChange} />
                  </Col>
                </Col>
                
                {array.map((item,index) => (
                  <Col md={12} key={index} className='searchCard'>

                    <Col key={item.id} className="visitedSearch">
                      <SearchCardComponent />
                    </Col>

                  </Col>
                ))}

               <Col className='searchPagination'>
                <MyPagination/>
               {/* <PaginationComponent totalItems={30} itemsPerPage={5} /> */}
               
               </Col>

               <Col className={`${styles.searchDetail}`}>
                <h3>Pittsburgh, PA:  Apartment for sale</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla Lorpsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla </p>
               </Col>

              </Row>
            </Col>
            <Col md={12}>
              <Col className="searchMaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28627.593049345593!2d78.14503004999999!3d26.247082999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692257531768!5m2!1sen!2sin" width="100%" height="650" loading="lazy" ></iframe>
              </Col>
            </Col>
          </Row>
        </Col>
      </HomeLayoutPage>
    </>
  )
}
