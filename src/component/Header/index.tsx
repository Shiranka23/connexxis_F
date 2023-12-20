
import { Col } from 'antd'
import React from 'react'
import styles from "./header.module.css";
import Image from 'next/image';
import { IMAGES } from '@/assest/Image';


export default function Header() {
    return (
        <>
            <Col className={`${styles.logo}`}>
             <Image src={IMAGES.Logo} alt="" />
            </Col>
        </>
    )
}
