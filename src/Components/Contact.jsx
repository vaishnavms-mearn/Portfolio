import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Animation from './Animation';
function Contact() {
    return (
        <div className='' style={{marginTop:'150px',marginBottom:'150px'}} data-aos="fade-up" data-aos-once='true'>
            <h1 className='text-center'>Contact Me</h1>
            <div className='d-flex justify-content-center'>
                <Form className='w-50 '>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Name</Form.Label>
                        <Form.Control className='form-control' type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Email address</Form.Label>
                        <Form.Control className='form-control' type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control className='form-control' as="textarea" rows={3} />
                    </Form.Group>
                    <div className="text-center">
                        <button className='btn btn-primary'>Send</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Contact