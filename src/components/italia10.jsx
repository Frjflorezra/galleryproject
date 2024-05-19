import React from 'react'
import italia101 from '../images/italia10.jpg'
import { Figure } from 'react-bootstrap'
const Italia10 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia101} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia10