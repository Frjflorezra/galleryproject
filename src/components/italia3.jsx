import React from 'react'
import italia31 from '../images/italia3.jpg'
import {Figure } from 'react-bootstrap'
const Italia3 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia31} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia3