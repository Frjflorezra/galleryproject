import React from 'react'
import italia11  from '../images/italia1.jpg'
import { Figure } from 'react-bootstrap'
const Italia1 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia11} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia1

