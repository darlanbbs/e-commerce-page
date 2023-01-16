import React from 'react'
import styled from './Prices.module.css'
import {useState,useRef} from 'react'

export const Prices = () => {
  const value = useRef(0)
  const [number, setNumber] = useState(0)

  function plus(){
    if(number >= 0){
      setNumber(number + 125.00)
      parseFloat(number)
     console.log(parseFloat(number.toFixed(2)))
      value.current = value.current + 1
    }
  }
  function minus(){
    if(number > 0){
      setNumber(number - 125)
      value.current = value.current - 1
    } 
  }
  return (
    <div>
        <div className={styled.container}>
         <div className={styled.over}>
            <div className={styled.titles}>
                <div className={styled.titleOver}>Sneaker Company</div>
                <div className={styled.titleUnder}>Fall Limited Edition Sneakers</div>
            </div>
            <div className={styled.text}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </div>
         </div>
         <div className={styled.under}>
            <div className={styled.values}>
              <div className={styled.value}>
                <h1 className={styled.valueCurrent}>{number}</h1>
                <h1 className={styled.discount}>50%</h1>
              </div>
                <div className={styled.fakeValue}>$250,00</div>
            </div>
            <div className={styled.purchaseLocal}>
              <div className={styled.quantityLocal}>
                <img src="icon-plus.svg" alt=""  onClick={plus} className={styled.imagePlus}/>
                <div className={styled.quantity}>{value.current}</div>
                <img src="icon-minus.svg" alt="" onClick={minus} className={styled.imageMinus}/>  
            </div>
            <div className={styled.buttonBuy}>
              <button><i><img src="/icon-cart.svg" alt="" /></i> Add to cart</button>
            </div>
            </div>
         </div>
        </div>

    </div>
  )
}
