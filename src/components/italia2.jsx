import React from 'react'
import italia21 from '../images/italia2.jpg'
import { Figure } from 'react-bootstrap'
const Italia2 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia21} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia2