import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Animation from './Animation';
function Aboutme() {
    return (
        <div className='' style={{marginTop:'200px'}} id='aboutme' data-aos="fade-down" data-aos-once='true'>
            <h1 className='text-center my-5'>About ME</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col  lg="3" md={6}>
                        <h4 className='mt-5  fs-5 about-me-h4 about-me-text'>
                           Interested in working together? <br />Lets Have a Talk
                        </h4>
                    </Col>
                    <Col  lg="5" md={6}>
                        <p className='about-me-p'>
                            A highly creative Web Designer/Developer with an Bachelors degree in Computer Science and 6 months of experience working as a MEARN STACK INTERN. Ability to work independently and collaborate effectively with a team.
                            seeking an entry-level position in web design.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Aboutme