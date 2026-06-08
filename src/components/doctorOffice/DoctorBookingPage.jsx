import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const providers = ['Any available provider', 'Dr. Alice', 'Nurse Practitioner Bob'];
const services = ['General Check-up', 'Walk-in Consultation', 'Blood Test', 'Vaccination'];

function DoctorBookingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedService = location.state?.serviceName || 'General Check-up';

    const [booking, setBooking] = useState({
        name: '',
        email: '',
        phone: '',
        service: selectedService,
        provider: 'Any available provider',
        date: '',
        time: '',
        notes: '',
    });

    function updateBooking(event) {
        const { name, value } = event.target;
        setBooking((currentBooking) => ({
            ...currentBooking,
            [name]: value,
        }));
    }

    function submitBooking(event) {
        event.preventDefault();
        navigate('/service/confirmation', { state: booking });
    }

    return (
        <section className="doctor-section doctor-page">
            <Container>
                <Row className="g-4">
                    <Col lg={5}>
                        <h1>Book an Appointment</h1>
                        <p>
                            Choose a service, provider, date, and time. This is a sample
                            booking form, so submitting it shows a dummy confirmation page.
                        </p>
                    </Col>

                    <Col lg={7}>
                        <Form className="doctor-form" onSubmit={submitBooking}>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="text"
                                        value={booking.name}
                                        onChange={updateBooking}
                                        placeholder="Your name"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        value={booking.email}
                                        onChange={updateBooking}
                                        placeholder="you@example.com"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="tel"
                                        value={booking.phone}
                                        onChange={updateBooking}
                                        placeholder="(613) 555-0123"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Service</Form.Label>
                                    <Form.Select name="service" value={booking.service} onChange={updateBooking}>
                                        {services.map((service) => (
                                            <option key={service}>{service}</option>
                                        ))}
                                    </Form.Select>
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Preferred Provider</Form.Label>
                                    <Form.Select name="provider" value={booking.provider} onChange={updateBooking}>
                                        {providers.map((provider) => (
                                            <option key={provider}>{provider}</option>
                                        ))}
                                    </Form.Select>
                                </Col>

                                <Col md={3}>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        name="date"
                                        type="date"
                                        value={booking.date}
                                        onChange={updateBooking}
                                    />
                                </Col>

                                <Col md={3}>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Select name="time" value={booking.time} onChange={updateBooking}>
                                        <option value="">Select time</option>
                                        <option>9:00 AM</option>
                                        <option>10:30 AM</option>
                                        <option>1:30 PM</option>
                                        <option>3:00 PM</option>
                                    </Form.Select>
                                </Col>

                                <Col xs={12}>
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="notes"
                                        rows={3}
                                        value={booking.notes}
                                        onChange={updateBooking}
                                        placeholder="Optional details for the clinic."
                                    />
                                </Col>

                                <Col xs={12}>
                                    <Button type="submit" className="doctor-primary-button">
                                        Confirm Appointment
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

export default DoctorBookingPage;
