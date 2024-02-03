import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Vector from '../Assets//images/Vector.png';
import Animation from './Animation';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CV from '../Assets/images/CV.jpg'
function Banner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    Animation()
    return (
        <div id='banner' className='my-5' data-aos="fade-up">
            <Container>
                <Row className=' px-lg-5 px-md-0'>
                    <Col className='my-5 ps-5' md={6}>
                        <h2 className='mt-5 mb-3 text-warning first-heading fs-1'><span className='fs-5 text-danger fw-bold'>Hi i m,</span><br></br>VAISHNAV MS</h2>
                        <h5 className='text-primary sec-heading my-4'>I am a <span>MEA(R)N Stack Developer</span></h5>
                        <div className="banner-button mt-5">
                            <a class="btn btn-outline-danger mx-5 work-button" href='https://github.com/vaishnavms9656'>My Work </a>
                            <a class="btn btn-outline-success cv-button" onClick={handleShow}>CV </a>
                        </div>

                    </Col>
                    <Col md={6}>
                        <img src={Vector} className='mt-3 banner-image' width={'100%'} height={'auto'} />
                    </Col>
                </Row>
                <Modal lg show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>CV</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <img src={CV} alt="" width={'100%'} height={'500px'} /> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default Banner