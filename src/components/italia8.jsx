import React from 'react'
import italia81 from '../images/italia8.jpg'
import { Figure } from 'react-bootstrap'
const Italia8 = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Figure>
          <Figure.Image src={italia81} alt="Fotografia italia"  width={450}/>
        </Figure>
    </div>
  )
}

export default Italia8