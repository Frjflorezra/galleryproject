import React from 'react'
import italia91 from '../images/italia9.jpg'
import {Figure } from 'react-bootstrap'
const Italia9 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia91} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia9