import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import DoctorCard from './DoctorCard';

const fallbackBooking = {
    name: 'Sample Patient',
    service: 'General Check-up',
    provider: 'Dr. Alice',
    date: '2026-06-15',
    time: '10:30 AM',
};

function DoctorConfirmationPage() {
    const location = useLocation();
    const booking = location.state || fallbackBooking;

    return (
        <section className="doctor-section doctor-section-light doctor-page">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <DoctorCard variant="details" className="doctor-confirmation">
                            <p className="doctor-eyebrow">Appointment Confirmed</p>
                            <h1>Thank you{booking.name ? `, ${booking.name}` : ''}.</h1>
                            <p>
                                This dummy confirmation shows the appointment details that would
                                normally be saved by a real clinic booking system.
                            </p>

                            <dl className="doctor-summary-list">
                                <div>
                                    <dt>Service</dt>
                                    <dd>{booking.service}</dd>
                                </div>
                                <div>
                                    <dt>Provider</dt>
                                    <dd>{booking.provider}</dd>
                                </div>
                                <div>
                                    <dt>Date</dt>
                                    <dd>{booking.date || 'Next available weekday'}</dd>
                                </div>
                                <div>
                                    <dt>Time</dt>
                                    <dd>{booking.time || '10:30 AM'}</dd>
                                </div>
                                <div>
                                    <dt>Clinic Address</dt>
                                    <dd>125 Broadview Avenue, Ottawa, ON K1A 0B1</dd>
                                </div>
                            </dl>

                            <Button as={Link} to="/service" className="doctor-primary-button">
                                Back to Home
                            </Button>
                        </DoctorCard>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DoctorConfirmationPage;
