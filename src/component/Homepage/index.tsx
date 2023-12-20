import { Col, Progress } from 'antd'
import React, { useState } from 'react'
import styles from "./styles.module.css"
import Uploader from '../Uploader'
import { IMAGES } from '@/assest/Image'
import Image from 'next/image'
import LoaderAnalysis from '../loader'
// import PdfViewer from '../Pdfview'

export default function Homepage() {
    const [loading, setLoading] = useState(false);
    const handleUpload = () => {
        // Set loading to true when the upload button is clicked
        setLoading(true);
    };
    // const pdfUrl = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    return (
        <>
            <Col className={`${styles.box}`}>
                <Col className={`${styles.layout}`}>
                    <h3>Resume Checker</h3>
                    <h1>Is your resume getting you eliminated?</h1>
                    <p>Our free and fast <span> AI resume checker </span> will give you the answer in just <span>3 minutes.</span> </p>


                    {/* <PdfViewer pdfUrl={pdfUrl} />
                <div className="striped-progress-bar">
                    <Progress percent={10} />
                </div> */}
                </Col>
                {loading ? <LoaderAnalysis /> : <Col className={`${styles.content}`}>
                    <Uploader onUpload={handleUpload} loading={loading} />
                    <p>For over 22 years, Connexis Search Group recruiters have worked closely with hiring managers to learn what they want to see in a resume. </p>
                    <p>We will check your resume for the six most common mistakes and provide examples of how to fix these problems.</p>
                </Col>
                }
            </Col>
            <Col className={`${styles.uploadResume}`}>
                <h2>One Click to Making Your Resume More Effective</h2>
                <Image src={IMAGES.Frame} alt="" />
            </Col>
        </>
    )
}
