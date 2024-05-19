import React from 'react'
import italia51 from '../images/italia5.jpg'
import { Figure } from 'react-bootstrap'
const Italia5 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia51} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia5