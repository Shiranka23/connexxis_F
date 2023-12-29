import { IMAGES } from '@/assest/Image'
import { Col, Progress } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./loader.module.css"

const descriptions = [
    {
        title: 'Company Description',
        content: '"Always describe your company in 1-3 sentences. Hiring managers might not recognize all company names, which can impact their understanding of your experience."'
    },
    {
        title: 'Position Description:',
        content: '"Use 1-2 sentences to describe your role under the job title. Job titles can be confusing without context."'
    },
    {
        title: 'Documenting Achievements:',
        content: '"Use bullet points to highlight tangible achievements in your roles. For sales positions, include rankings or quotas; for other roles, specific project successes or recognitions."'
    },
    {
        title: 'Employment Dates:',
        content: ' "Clearly document employment dates to avoid any perception of employment gaps. Be transparent about any gaps if they exist."'
    },
    {
        title: 'Education Details:',
        content: ' "Include your graduation date. It helps hiring managers gauge your experience level and avoids ambiguity about your educational qualifications."'
    },
    // Add more descriptions as needed
];

export default function LoaderAnalysis(){
    const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup on component unmount

    }, []); // Empty dependency array ensures the effect runs once on mount
    const currentDescription = descriptions[currentDescriptionIndex];
    return (
        <>
            <Col className="striped-progress-bar">
                <h5>Analysing Your Resume / CV</h5>
                <p>Please wait..... your resume report is going to generate</p>
                <Progress percent={10} />
                <h6>Analysing</h6>
                <Col className={`${styles.stripped}`}>
                    <Image src={IMAGES.Bulb} alt="" />
                    <Col className={`${styles.strippedText}`}>
                        <p>We are checking your resume for the following:</p>
                        <p>{currentDescription.title}: <span>{currentDescription.content}</span></p>
                    </Col>
                </Col>
            </Col>
        </>
    )
}
