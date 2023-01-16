import React from 'react'
import styled from './Container.module.css'
import { Row,Col } from 'reactstrap';
import FsLightbox from "fslightbox-react";
import { Prices } from '../components/Prices'
import { useState } from 'react'
export const Container = () => {
    const [image, setImage] = useState('image-product-1.jpg')
    const [toggler, setToggler] = useState(false);
    

  return (
    <div>
      <div className='container'>
        <Row className={styled.bothSide}>
           <Col xs='6' className={styled.leftSide}>
           <div className={styled.imagens}>
            <div className={styled.bigImage}>
              <img src={image} alt="snickerTenis" className={styled.image} />
            </div>
            <div className={styled.thumbs}>
              <img src="image-product-1-thumbnail.jpg" alt="" onClick={() => setImage('image-product-1.jpg')} onDoubleClick={() => setToggler(!toggler)}/>
              <img src="image-product-2-thumbnail.jpg" alt="" onClick={() => setImage('image-product-2.jpg')}
              onDoubleClick={() => setToggler(!toggler)}/>
              <img src="image-product-3-thumbnail.jpg" alt="" onClick={() => setImage('image-product-3.jpg')}
              onDoubleClick={() => setToggler(!toggler)}/>
              <img src="image-product-4-thumbnail.jpg" alt="" onClick={() => setImage('image-product-4.jpg')}
              onDoubleClick={() => setToggler(!toggler)}/>
            </div>
           </div>
           </Col>
           <Col xs='6' className={styled.leftSide}>
            <Prices/>
           </Col>
        </Row>
        <FsLightbox
				toggler={toggler}
				sources={[
					'/image-product-1.jpg',
					'/image-product-2.jpg',
					'/image-product-3.jpg',
					'/image-product-4.jpg'
				]}
			/>
      </div>
    </div>
  )
}
