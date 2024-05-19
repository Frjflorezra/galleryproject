import React from 'react'
import italia61 from '../images/italia6.jpg'
import {Figure } from 'react-bootstrap'
const Italia6 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia61} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia6