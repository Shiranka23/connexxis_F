import HomeLayoutPage from '@/components/Layout/homeLayout'
import { Col, Row } from 'antd'
import React from 'react'
import styles from "./contact.module.css"
import ContactInputComponent from './component/contactInput'
import PhoneInputComponent from '@/components/TextFields/phoneInput'
import TextareaInputComponent from './component/textareaInput'
import { SVG } from '@/assest/svg'
import { IMAGES } from '@/assest/images'
import Image from 'next/image'
import FilledButtonComponent from '@/components/Button'

export default function ContactUs() {
  return (
    <>
     <HomeLayoutPage>
     <Row>
      <Col md={15}>
      <Col className={`${styles.contactList}`}>
      <h3>Contact Us</h3>
      <p>We love to hear from you, so if there’s anything you’d like to ask us, we’re right here and ready to help in every way we can.</p>
      <Row>
        <Col md={12}>
            <Col className={`${styles.inputField}`}>
            <ContactInputComponent title="Your name" placeholder="Name" />
            <SVG.Person/>
            </Col>
        </Col>
        <Col md={12}>
            <Col className="phoneInput ">
            <PhoneInputComponent label="Phone Number" containerClass="telPhoneInputContainer" />
            </Col>
        </Col>
        <Col md={24}>
            <Col className={`${styles.textArea}`}>
                <label>Message</label>
             <TextareaInputComponent/>
            </Col>
        </Col>
        <Col style={{width:"100%", textAlign:"end", marginTop:"12px"}}>
        <FilledButtonComponent  className={`${styles.submitBtn}`}>
              Submit <SVG.LeftArrow />
            </FilledButtonComponent>
        </Col>
      </Row>
      </Col>

      </Col>
      <Col md={9}>
        <Col className={`${styles.locationList}`}>
            <h6>Location</h6>
            <Col className={`${styles.locationMap}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28627.597570167487!2d78.16611829999998!3d26.247064650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692274098969!5m2!1sen!2sin" width="100%" height="300"  loading="lazy"></iframe>
            </Col>
            <Col className={`${styles.rectangleTag}`}>
            <SVG.Rectangle/>
            <p>17 loreum epsum, Indonesia</p>
            </Col>
            <Col className={`${styles.rectangleTag}`}>
            <SVG.Vectors/>
            <p>(360) 8001-8588, (360) 874 548</p>
            </Col>
            <Col className={`${styles.rectangleTag}`}>
            <SVG.Union/>
            <p>info@gmail.com</p>
            </Col>
            <h6>Follow us</h6>
            <Col className={`${styles.socialIcons}`}>
            <Image src={IMAGES.Twitters} alt="" />
            <Image src={IMAGES.FaceBooks1} alt="" />
            <Image src={IMAGES.Grp} alt="" />
            </Col>
        </Col>
      </Col>
     </Row>
    </HomeLayoutPage>
    </>
  )
}
