import { IMAGES } from "@/assest/images";
import { Card, Carousel, Button, Col, Row } from "antd";
import Image from "next/image";
import styles from "./cardModule.module.css";
import { SVG } from "@/assest/svg";
import { useRouter } from "next/router";

const images = [IMAGES.Banner, IMAGES.Banner]; // Define the array with multiple image URLs

const HomeCardComponent = () => {
  const router = useRouter();
  return (
    <Card
      className={`${styles.mainCard}`}
      hoverable
      style={{
        width: 310,
      }}
    >
      <Carousel dotPosition="bottom" >
        {images.map((imageUrl, index) => (
          <Col key={index} className={`${styles.cardImg}`}>
            <Image alt={`slide-${index}`} src={imageUrl} />
          </Col>
        ))}
        
      </Carousel>
      {/* <div className={router.pathname === '/dashboard' ? 'hides' : 'shows'}>
      <Col className={`${styles.edit1}`}>
      <SVG.Edit1/>
      </Col>
      </div> */}
      <Col className={`${styles.heartDiv}`}>
        <SVG.Heart/>
        <SVG.Rotated/>
        </Col>
        <Col className={`${styles.galleryIcon}`}>
        <span>
      <SVG.Gallers/>
      5
      </span>
      </Col>
      <Col className={`${styles.cardBody}`}>
        <h5>Classic House For Sale</h5>
        <h4>€600.000</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pulvinar neque. Nulla...
        </p>
        <Row>
          <Col md={8}>
            <Col className={`${styles.cardDetail}`}>
              <Image src={IMAGES.Beds} alt="" />
              <p>
                <span>5</span> beds
              </p>
            </Col>
          </Col>
          <Col md={8}>
            <Col className={`${styles.cardDetail}`}>
              <Image src={IMAGES.Bath} alt="" />
              <p>
                <span>5</span> beds
              </p>
            </Col>
          </Col>
          <Col md={8}>
            <Col className={`${styles.cardDetail}`}>
              <Image src={IMAGES.AreaImg} alt="" />
              <p>
                <span>5</span> beds
              </p>
            </Col>
          </Col>
        </Row>
      </Col>
    </Card>
  );
};

export default HomeCardComponent;