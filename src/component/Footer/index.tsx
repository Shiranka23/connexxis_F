import { Col } from 'antd'
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image';
import { IMAGES } from '@/assest/Image';


export default function Footer() {
    return (
        <>
            <Col className={`${styles.logo}`}>
             <Image src={IMAGES.Logo} alt="" />
             <Col>
             <span>Terms of Use</span>
             <span>Privacy Policy</span>
             </Col>
            </Col>
        </>
    )
}