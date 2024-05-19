import React from 'react'
import {Link} from 'react-router-dom'
import Italia1 from '../images/italia1.jpg'
import Italia2 from '../images/italia2.jpg'
import Italia3 from '../images/italia3.jpg'
import Italia4 from '../images/italia4.jpg'
import Italia5 from '../images/italia5.jpg'
import Italia6 from '../images/italia6.jpg'
import Italia7 from '../images/italia7.jpg'
import Italia8 from '../images/italia8.jpg'
import Italia9 from '../images/italia9.jpg'
import Italia10 from '../images/italia10.jpg'
import { Col, Container, Figure, FigureCaption, Row } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div style={{ overflowX: 'auto'}}>
        <Container>
            <Row>
                <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia1">
                            <Figure>
                                <Figure.Image src={Italia1} width={150}/>
                                <FigureCaption>Bellagio</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia2">
                            <Figure>
                                <Figure.Image src={Italia2} width={150}/>
                                <FigureCaption>Clinqueterre</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia3">
                            <Figure>
                                <Figure.Image src={Italia3} width={150}/>
                                <FigureCaption>Giardino Bardini</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia4">
                            <Figure>
                                <Figure.Image src={Italia4} width={150}/>
                                <FigureCaption>Manarola</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia5">
                            <Figure>
                                <Figure.Image src={Italia5} width={150}/>
                                <FigureCaption>Venice</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia6">
                            <Figure>
                                <Figure.Image src={Italia6} width={150}/>
                                <FigureCaption>Venice</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia7">
                            <Figure>
                                <Figure.Image src={Italia7} width={150}/>
                                <FigureCaption>Portofino</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia8">
                            <Figure>
                                <Figure.Image src={Italia8} width={150}/>
                                <FigureCaption>Rialto Bridge</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia9">
                            <Figure>
                                <Figure.Image src={Italia9} width={150}/>
                                <FigureCaption>Sanquirico</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                    <Col xs= {4} md={2} className='px-1'>
                        <Link to="/italia10">
                            <Figure >
                                <Figure.Image src={Italia10} width={150}/>
                                <FigureCaption>Trevi Fountain</FigureCaption>
                            </Figure>
                        </Link>
                    </Col>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Navigation