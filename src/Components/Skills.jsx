import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Animation from './Animation';
function Skills() {
    Animation()
    return (
        <div  id='skills' style={{marginTop:'150px',marginBottom:'150px'}} data-aos="fade-down" data-aos-once='true'>
            <h1 className='text-center pt-5'>Skills</h1>
            <p className='text-center pt-4 skill-p'>These are the technologies i've worked with</p>
            <Container className='mt-5' style={{paddingLeft:'100px'}}>
                <Row className='d-flex justify-content-around'>
                    <Col>
                        <Card style={{ width: '13rem' }} className='custom-class'>
                            <Card.Img variant="top" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>HTML</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '13rem' }} className='custom-class my-5 my-md-0'>
                            <Card.Img variant="top" src="https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '13rem' }} className='my-md-5 my-lg-0 custom-class'>
                            <Card.Img variant="top" src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>JS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '13rem' }} className='custom-class my-lg-5 my-xl-0 my-md-5 my-5 '>
                            <Card.Img variant="top" src="https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-png-400.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>MongoDB</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-5 py-5'>
                    <Col>
                        <Card style={{ width: '13rem' }} className='custom-class'>
                            <Card.Img variant="top" src="https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>Express JS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '13rem' }} className='custom-class my-5 my-md-0'>
                            <Card.Img variant="top" src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center '>React</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '13rem' }} className='custom-class my-md-5 my-lg-0'>
                            <Card.Img variant="top" src="https://cdn3.freelogovectors.net/wp-content/uploads/2019/01/angular-logo.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>Angular</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '13rem' }} className='custom-class my-lg-5 my-xl-0 my-5 my-md-0 my-md-5 my-5'>
                            <Card.Img variant="top" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width={'100%'} height={'200px'} style={{ padding: '20px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>Node JS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills