import React from 'react'
import CustomerHeader from '../Common/CustomerHeader';
import './ShowProcess.css';
export default function ShowProcess() {
  return (
        <div className='cus-show-p-div'>
            <CustomerHeader/>
        
         <h2 className='cus-process-label'>We are in the process of .......</h2>

         <div className='p-num-row1'>
            <div className="cus-pro-num1-column">
              <h3 className='cus-pro-circle1'>01</h3>
              <h3 className='cus-pro-label1'>Coming to pickup</h3>
            </div>
            <div className="cus-pro-num2-column">
              <h3 className='cus-pro-circle2'>02</h3>
              <h3 className='cus-pro-label2'>Sorting</h3>
            </div>
          </div>

        <div className='p-num-row2'>
          <div className="cus-pro-num3-column">
            <h3 className='cus-pro-circle3'>03</h3>
            <h3 className='cus-pro-label3'>Doing Laundry</h3>
          </div>
          <div className="cus-pro-num4-column">
            <h3 className='cus-pro-circle4'>04</h3>
            <h3 className='cus-pro-label4'>Returing your items</h3>
          </div>
        </div>
        </div>
  )
}