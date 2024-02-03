import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from 'react-bootstrap/Card';
import IT from '../Assets/images/IT.png'
import Luminar from '../Assets/images/Luminar.png'
import Travel from '../Assets/images/Travel.png'
import Bank from '../Assets/images/Bank.png'
import BMI from '../Assets/images/BMI.png'
import Budget from '../Assets/images/Budget.png'
import Discount from '../Assets/images/Discount.png'
import Movie from '../Assets/images/Movie.png'
import Resto from '../Assets/images/Resto.png'
import Doctor from '../Assets/images/Doctor.png'
import Contact from '../Assets/images/Contact.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
export default function CenteredTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className="projects" id='projects' style={{marginTop:'100px',marginBottom:'100px'}} data-aos="fade-down" data-aos-once='true'>
            <h1 className='text-center my-5'>Projects</h1>
            <Box sx={{ width: '100%', typography: 'body1',border:'none' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList textColor="secondary"
                            indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example" centered>
                            <Tab className='text-danger' label="HTML & CSS" value="1" />
                            <Tab className='text-danger' label="Javascript" value="2" />
                            <Tab className='text-danger' label="React" value="3" />
                        </TabList>

                        <Container>
                            <TabPanel centered value="1" className=' mt-3 '>

                                <Row className="d-flex justify-content-center">
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                        <Card style={{ width: '18rem' }} className='custom-class img'  >
                                            <Card.Img variant="top" src={IT} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Bill Gates Porfolio</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href="https://github.com/vaishnavms9656/it-person-portfolio">Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/it-person-portfolio/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Luminar} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Luminar Website</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/Luminar-Website'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/Luminar-Website/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Travel} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title><h6 className='text-center '> Travel Blog</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/travel-blog-site'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/travel-blog-site/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPanel>
                            <TabPanel value="2" className='mt-2'>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Bank} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center'> Bank Site</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/bank-site'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/bank-site/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={BMI} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> BMI Calculator</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/BMI-Calculator-Task'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/BMI-Calculator-Task/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Budget} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title><h6 className='text-center '> Budget Calculator</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/Budget-Calculator'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/Budget-Calculator/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center" >
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Discount} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Discount Calcuator</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/Discount-Calculator'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/Discount-Calculator/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Movie} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Movie Search</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3' href='https://github.com/vaishnavms9656/movie-search'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://vaishnavms9656.github.io/movie-search/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                            </TabPanel>
                            <TabPanel value="3">
                                <Row className="d-flex justify-content-center">
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-xs-3 my-xs-5'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Resto} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Restaurant App</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://restocafe-site-new.netlify.app/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 mx-md-5 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Doctor} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title> <h6 className='text-center '> Doctor App</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href='https://doctorapp-site.netlify.app/'>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={4} xl={3} className='my-3  mx-xl-3 my-md-5 my-xl-3 mx-sm-5 my-sm-3'>
                                        <Card style={{ width: '18rem' }} className='custom-class'>
                                            <Card.Img variant="top" src={Contact} style={{ backgroundSize: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title><h6 className='text-center '> Contact App</h6></Card.Title>
                                                <div className="content">
                                                    <a className='btn btn-primary m-3'>Github Link</a>
                                                    <a className='btn btn-warning m-3' href=''>Live Link</a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPanel>
                        </Container>

                    </Box>
                </TabContext>
            </Box >
        </div >
    );
}