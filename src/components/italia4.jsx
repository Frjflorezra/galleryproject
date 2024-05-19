import React from 'react'
import italia41 from '../images/italia4.jpg'
import { Figure } from 'react-bootstrap'
const Italia4 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia41} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia4