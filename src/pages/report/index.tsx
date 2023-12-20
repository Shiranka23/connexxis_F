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
                            <Col className={`${styles.analysisCard}`}>
                                <h4>Demographics</h4>
                                <Col className={`${styles.cardText}`}>
                                    <Image src={IMAGES.Left} alt="" />
                                    <Col className={`${styles.correction}`}>
                                        <h5>Incorrect Way</h5>
                                        <p>Problem #1 Incomplete Demographics: Hiring managers like to know where you live, so include your You dont have to include a street address.
                                            You should also include a phone number and email address
                                        </p>
                                        <p>Charles Bishop</p>
                                        <Col className={`${styles.analysisNumber}`}>
                                            <p>T- 864-979-8731</p>
                                            <p> missing city and state</p>
                                        </Col>
                                        <p style={{ marginTop: "0" }}>tony@connexissearch.com</p>
                                    </Col>
                                </Col>
                                <Col className={`${styles.divider}`}>
                                    <Image src={IMAGES.Right} alt="" />
                                </Col>
                                <Col className={`${styles.cardText}`}>
                                    <Image src={IMAGES.Correct} alt="" />
                                    <Col className={`${styles.trueCorrection}`}>
                                        <h5>Correct Way</h5>

                                        <p>Charles Bishop</p>
                                        <p>Greenville, SC</p>
                                        <p>T- 864-979-8731</p>
                                        <p>tony@connexissearch.com</p>
                                        <Col className={`${styles.tips}`}>
                                            <p>Tip—This will be displayed to the candidate.  I want the ability to modify the tips by changing the wording as needed.  Also, the ability to make bold, italicize, and change font and font size.</p>
                                            <span>Tip: Hiring Managers want you to include the city and state in your address. This is important for sales positions since they want to know that you are in the territory.</span>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className={`${styles.analysisCard}`}>
                                <h4>Problem 1</h4>
                                <Col className={`${styles.cardText}`}>
                                    <Image src={IMAGES.Left} alt=""  />
                                    <Col className={`${styles.correction}`}>
                                        <h5>Incorrect Way</h5>
                                        <p>Problem #2:  Missing Company Description:  Your resume lacks 1-3 sentences describing what your company does.
                                        </p>
                                        <Image src={IMAGES.Dummy} alt="" className={`${styles.imgUpload}`} />

                                    </Col>
                                </Col>
                                <Col className={`${styles.divider}`}>
                                    <Image src={IMAGES.Right} alt="" />
                                </Col>
                                <Col className={`${styles.cardText}`}>
                                    <Image src={IMAGES.Correct} alt="" />
                                    <Col className={`${styles.trueCorrection}`}>
                                        <h5>Correct Way</h5>
                                        <Image src={IMAGES.Second} alt="" className={`${styles.imgUpload}`} />
                                        <Col className={`${styles.tips}`}>
                                            <span>Tip: Do not assume that a hiring manager will know the company you work for. Not providing this information may eliminate you since the hiring manager may not have time to Google your company. Here is an Example: Illumina is a well-known company in the field of genomics and biotechnology. They specialize in developing and manufacturing equipment and technologies for genetic analysis, particularly DNA sequencing.</span>
                                           
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            {/* <Image src={IMAGES.Left} alt="" />
                            <Image src={IMAGES.Right} alt="" /> */}
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
