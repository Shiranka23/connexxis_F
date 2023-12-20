import React from 'react'
import styles from "./home.module.css"
import HomeLayoutPage from '@/components/Layout/homeLayout'
import { Col, Input, Row, Select } from 'antd'
import Image, {StaticImageData} from 'next/image'
import { IMAGES } from '@/assest/images'
import { SVG } from '@/assest/svg'
import FilledButtonComponent from '@/components/Button'
import HomeCardComponent from './component/card'
import { FI } from 'country-flag-icons/react/1x1'
import SelectInputField from './component/selectInput'


interface BlogItem {
  image: StaticImageData;
  date: string;
  title: string;

}


const blogData: BlogItem[] = [
  { 
    image: IMAGES.Blog2, // Use the image path directly
    date: "By Dorothy Bell- Nov 05, 2019",
    title: "A Guide To New Orleans’ Best - From Boutique Hotel Maison de la Luz"
  },
  { 
    image: IMAGES.Blog2, // Use the image path directly
    date: "By Dorothy Bell- Nov 05, 2019",
    title: "A Guide To New Orleans’ Best - From Boutique Hotel Maison de la Luz"
  },
  { 
    image: IMAGES.Blog2, // Use the image path directly
    date: "By Dorothy Bell- Nov 05, 2019",
    title: "A Guide To New Orleans’ Best - From Boutique Hotel Maison de la Luz"
  },
 
  // Add more blog items as needed
];

interface HomeItem {
    image: StaticImageData;
    text: string;
    title: string;
  
  }
  
  const Data: HomeItem[] = [
    { 
      image: IMAGES.Phome, // Use the image path directly
      text: "30 Properties",
      title: "Buy Houses"
    },
    { 
        image: IMAGES.Phome, // Use the image path directly
        text: "30 Properties",
        title: "Buy Houses"
      },
      { 
        image: IMAGES.Phome, // Use the image path directly
        text: "30 Properties",
        title: "Buy Houses"
      },
      { 
        image: IMAGES.Phome, // Use the image path directly
        text: "30 Properties",
        title: "Buy Houses1"
      },
]
const array = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  const List = [
    {
      id: 1,
      text: "House in Paris",
    },
    {
      id: 2,
      text: "Apartments in Paris",
    },
    {
      id: 3,
      text: "House in Paris",
    },
    {
      id: 4,
      text: "Apartments in Paris",
    },{
      id: 5,
      text: "House in Lyon",
    },{
      id: 6,
      text: "Apartments in Lyon",
    },{
      id: 7,
      text: "House in Lyon",
    },{
      id: 8,
      text: "Apartments in Lyon",
    },{
      id: 9,
      text: "House in Nice",
    },{
      id: 10,
      text: "Apartments in Nice",
    },{
      id: 11,
      text: "House in Nice",
    },{
      id: 12,
      text: "Apartments in Nice",
    },{
      id: 13,
      text: "House in Paris",
    },{
      id: 14,
      text: "House in Paris",
    },{
      id: 15,
      text: "House in Paris",
    },{
      id: 16,
      text: "House in Paris",
    },{
      id: 17,
      text: "House in Paris",
    },{
      id: 18,
      text: "House in Paris",
    },{
      id: 19,
      text: "House in Paris",
    },{
      id: 20,
      text: "House in Paris",
    },

  ]

  const budgetOptions = [
    { value: 'budget', label: 'Budget' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },

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

  const { Option } = Select;

const selectBefore = (
  <Select defaultValue="House">
    <Option value="Rent">Rent</Option>
    <Option value="Sale">Sale</Option>
  </Select>
);


export default function HomePage() {
  return (
    <>
    <HomeLayoutPage>
        <Col className={`${styles.homeBanner}`}>
        <Row>
          <Col md={24}>
          <Col className={`${styles.realState}`}>
          <p>Real Estate Searching Platform</p>
          <h6>Find The House of Your Dreams Using Our Platform </h6>
          </Col>
          </Col>
          <Col  className={`${styles.searchBoxed}`}>
            <Col className={`${styles.whiteBox}`}>
           <Col className={`${styles.tabsButton}`}>
           <h6 className={`${styles.activeTag}`}>Buy</h6>
           <h6>Rent</h6>
           </Col>
           <Col>
           <Col className="locationSearch">
           <Input addonBefore={selectBefore} placeholder='Search any location' />
           <SVG.Maps/>
           <FilledButtonComponent className={`${styles.searchLocation}`}>Search</FilledButtonComponent>
           </Col>

           </Col>
           </Col>
           <Col className='homeSelect'>
            <Col className={`${styles.searchFilter}`}>
              <SelectInputField defaultValue="budget" options={budgetOptions} onChange={handleSelectChange} />
              <SelectInputField defaultValue="area" options={area} onChange={handleSelectChange} />
              <SelectInputField defaultValue="bedroom" options={bedroom} onChange={handleSelectChange} />
              <SelectInputField defaultValue="construction" options={construction} onChange={handleSelectChange} />

             
</Col>
            </Col>
          </Col>
        </Row>
        </Col>
        <Col className={`${styles.section2}`}>
        <Row>
            <Col md={10}>
                <Col>
                <Image src={IMAGES.One} alt="" />
                </Col>
            </Col>
            <Col md={14}>
                <Col className={`${styles.rightConetnt}`}>
                 <span><SVG.About/></span>
                 <h1>Buying and renting directly from the owner</h1>
                 <p>Over 39,000 people work for us in more than 70 countries all over
                  the This breadth of global coverage, combined with specialist services</p>
                </Col>
                <Row>
                    <Col md={12}>
                      <Col className={`${styles.details}`}>
                        <SVG.FHome/>
                        <span>Wide Range of Properties</span>
                      </Col>
                    </Col>
                    <Col md={12}>
                      <Col className={`${styles.details}`}>
                        <SVG.Fmountain/>
                        <span>Wide Range of Properties</span>
                      </Col>
                    </Col>
                    <Col md={12}>
                      <Col className={`${styles.details}`}>
                        <SVG.Fheart/>
                        <span>Trust by Thousands</span>
                      </Col>
                    </Col>
                    <Col md={12}>
                      <Col className={`${styles.details}`}>
                        <SVG.Fsecure/>
                        <span>Complete 24/7 Security</span>
                      </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Col>
        <Col className={`${styles.section3}`}>
         <Row>
            <Col md={7}>
                <Col className={`${styles.explorer}`}>
                <h3>Explore by
                       Property Type</h3>
                  <span><SVG.Bullet/></span>
                <p>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Duis mollis et sem sed</p>
                </Col>
            </Col>
            <Col md={17}>
                <Col className={`${styles.dataMap}`}>
            {Data.map((item, index) => (
             <Col className={`${styles.boxed}`} key={index}>
                 <Image src={item.image} alt="" />
                 <h6>{item.title}</h6>
                 <p>{item.text}</p>
             </Col>
            ))}
            </Col>
            </Col>
         </Row>
        </Col>
        <Col className={`${styles.section4}`}>
           <Row>
            <Col md={12}>
              <Col className={`${styles.content}`}>
                <span>BUY a House/apartment</span>
                <h3>Your dream house/Apartment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
                <FilledButtonComponent>Find a House/Apartment</FilledButtonComponent>
              </Col>

            </Col>
            <Col md={12}>
                <Col className={`${styles.contentRight}`}>
                <Image src={IMAGES.Medium} alt="" />
                </Col>
            </Col>
           </Row>
        </Col>
        <Col className={`${styles.section5}`}>
           <h1>BUY house/Apartment</h1>
           <Row>
           {array.map((item,index) => (
                  <Col md={8} key={index} className='homeCard'>

                    <Col key={item.id} className="visitedSearch">
                      <HomeCardComponent/>
                    </Col>

                  </Col>
                ))}
           </Row>
        </Col>
        <Col className={`${styles.section6}`}>
          <Row style={{paddingBottom:"20px"}}>
          <Col md={12}>
                <Col className={`${styles.contentRight}`}>
                <Image src={IMAGES.Vertical} alt="" />
                </Col>
            </Col>
            <Col md={12}>
              <Col className={`${styles.content}`}  style={{left:"0"}}>
                <span>BUY a House/apartment</span>
                <h3>Your dream house/Apartment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore
                 magna aliqua.</p>
                <FilledButtonComponent>Rest a House/Apartment</FilledButtonComponent>
              </Col>

            </Col>
          </Row>
        </Col>
        <Col className={`${styles.section5}`}>
           <h1>Rent house/Apartment</h1>
           <Row>
           {array.map((item,index) => (
                  <Col md={8} key={index} className='homeCard'>

                    <Col key={item.id} className="visitedSearch">
                      <HomeCardComponent/>
                    </Col>

                  </Col>
                ))}
           </Row>
        </Col>
        <Col className={`${styles.section8}`}>
        <Col className={`${styles.topCountry}`}>
          <h2>Top Countries</h2>
          <Col className={`${styles.countryBtn}`}>
          <FilledButtonComponent className={`${styles.activeBtn}`}>France</FilledButtonComponent>
          <FilledButtonComponent>UK</FilledButtonComponent>
          <FilledButtonComponent>Singapore</FilledButtonComponent>
          <FilledButtonComponent>Australia</FilledButtonComponent>
          <FilledButtonComponent>UAE</FilledButtonComponent>
          </Col>
        </Col>
        <Row>
        {List.map((item,index) => (
          <Col md={6} key={index}>
           <Col className={`${styles.countryList}`}>
            <p>{item.text}</p>
           </Col>
          </Col>
        ))}
        </Row>
        </Col>
        <Col className={`${styles.section9}`}>
          <Col className={`${styles.blogHead}`}>
           <SVG.Heading/>
           <h2>Our Latest Blogs</h2>
          </Col>
          <Row>
          {blogData.map((item, index) => (
            <Col key={index} md={8}>
              <Col className={`${styles.cardBlog}`}>
                <Image src={item.image} alt="" width={300} height={200} /> {/* Adjust width and height as needed */}
                <span className={`${styles.propertySpan}`}>Property</span>
               <h3>How to achieve financial indep</h3>
               <p>There are many variations of passages of lorem
ipsum available.</p>
              </Col>
            </Col>
          ))}
        </Row>
        </Col>
    </HomeLayoutPage>
    </>
  )
}
