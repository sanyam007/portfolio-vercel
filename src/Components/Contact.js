import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails); 
    const [buttonText, etButtonText] = useState('Send');
    const [status, setStatus] = useState({}); 
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    
    return (
        <section className="contact" id="contact">
            <container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                    <h2>Get in Touch!</h2>
                    <form onSubmit={''}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/> 
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.phone} placeholder="Phone no." onChange={(e) => onFormUpdate('phone ', e.target.value)}/> 
                            </Col>
                            <Col size={12} className="px-1">
                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit"><span>Submit</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                             }
                        </Row>
                    </form>
                    </Col>
                </Row>
            </container>
        </section>
    )
}