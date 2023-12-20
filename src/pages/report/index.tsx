import FilledButtonComponent from '@/component/Button'
import Layout from '@/component/Layout'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"

import PdfViewer from '@/component/Pdfview'
import { IMAGES } from '@/assest/Image'
import Image from 'next/image'
import Semicircle from '@/component/Semicirclebar'


const suggestions = [
    { id: 1, category: 'Demographics' },
    { id: 2, category: 'Company Description Missing' },
    { id: 3, category: 'Position Description Missing' },
    { id: 4, category: 'Achievements Not Documented Properly' },
    { id: 5, category: 'Dates of Employment are not Documented Properly' },
    { id: 6, category: 'Education Missing Graduating Date' },
    // Add more items as needed
  ];

export default function Report() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate progress incrementing over time
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const percentage: number = 75;
    // const pdfUrl = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    return (
        <>
            <Layout>
                <Col className="bg_img">
                    <Row className={`${styles.codeBox}`}>
                        <Col md={14}>
                            <Col className={`${styles.bgContent}`}>
                                <h4>We are recommending changes based on 22 years of experience working with hiring managers.</h4>
                                <p>Your overall score is above <span>66.67%.</span>  It means a <span>Good Resume</span> </p>
                                <p>But there is some room for improvement.
                                    We are providing suggestions on how to fix your resume, or we can make the changes for you for a small fee.</p>
                                <FilledButtonComponent>Help Me Fix My Resume</FilledButtonComponent>
                            </Col>
                        </Col>
                        <Col md={10}>
                            <Col className={`${styles.semiCircle}`}>
                                <h6>We want to help you make a great impression</h6>
                                <Semicircle />
                                <Col className='listedAnalysis'>
                                    <h3>Review our suggestions to see what you can fix.</h3>
                                    <ul>
                                        {suggestions.map((item) => (
                                            <li key={item.id}>
                                                <Image src={IMAGES.Info} alt="" />
                                                {item.category}
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col className={`${styles.area}`}>
                    <h4>Areas to Improve</h4>
                    <p>Included Sections which needs to be improved:</p>
                </Col>
                <Row className={`${styles.codeBox}`}>
                    <Col md={12}>
                        <Col className={`${styles.score}`}>
                            <h4>Steps to Increase your score</h4>
                        </Col>
                        <Col>
                            <Image src={IMAGES.Left} alt="" />
                            <Image src={IMAGES.Right} alt="" />
                        </Col>
                    </Col>
                    <Col md={12}>
                        <Image src={IMAGES.Resume} alt="" className={`${styles.reumeImg}`} />
                        {/* <PdfViewer pdfUrl={pdfUrl} /> */}
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
