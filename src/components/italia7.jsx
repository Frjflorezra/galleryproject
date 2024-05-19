import React from 'react'
import italia71 from '../images/italia7.jpg'
import { Figure } from 'react-bootstrap'
const Italia7 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia71} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia7