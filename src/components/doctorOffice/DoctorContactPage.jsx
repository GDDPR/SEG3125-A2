import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import DoctorCard from './DoctorCard';

function DoctorContactPage() {
    return (
        <section className="doctor-section doctor-page">
            <Container>
                <Row className="g-4">
                    <Col lg={5}>
                        <h1>Contact Us</h1>
                        <p>
                            Use this sample form for general questions about the clinic.
                            Appointment requests can be made from the booking page.
                        </p>
                    </Col>

                    <Col lg={7}>
                        <DoctorCard variant="details" className="mb-3">
                            <h2>Clinic Information</h2>
                            <p><strong>Address:</strong> 125 Broadview Avenue, Ottawa, ON K1A 0B1</p>
                            <p><strong>Phone:</strong> (613) 555-0188</p>
                            <p><strong>Email:</strong> hello@broadviewclinic.example</p>
                            <p><strong>Hours:</strong></p>
                            <ul>
                                <li>Monday to Friday: 8:30 AM - 5:00 PM</li>
                                <li>Saturday: 9:00 AM - 1:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </DoctorCard>

                        <Form className="doctor-form">
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="you@example.com" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="(613) 555-0123" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Select>
                                        <option>General question</option>
                                        <option>Clinic hours</option>
                                        <option>Insurance question</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Col>

                                <Col xs={12}>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Tell us what you need help with."
                                    />
                                </Col>

                                <Col xs={12}>
                                    <Button type="button" className="doctor-primary-button">
                                        Submit Request
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DoctorContactPage;
