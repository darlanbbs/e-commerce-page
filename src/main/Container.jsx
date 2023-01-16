import React from 'react'

import { useState } from 'react'

import { Row,Col } from 'reactstrap';
import { Prices } from '../components/Prices'

import styled from './Container.module.css'


export const Container = () => {
    const [image, setImage] = useState('image-product-1.jpg')

    

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
              <img src="image-product-1-thumbnail.jpg" alt="" onClick={() => setImage('image-product-1.jpg')} />
              <img src="image-product-2-thumbnail.jpg" alt="" onClick={() => setImage('image-product-2.jpg')}/>
              <img src="image-product-3-thumbnail.jpg" alt="" onClick={() => setImage('image-product-3.jpg')}/>
              <img src="image-product-4-thumbnail.jpg" alt="" onClick={() => setImage('image-product-4.jpg')}/>
            </div>
           </div>
           </Col>
           <Col xs='6' className={styled.leftSide}>
            <Prices/>
           </Col>
        </Row>
      </div>
    </div>
  )
}
