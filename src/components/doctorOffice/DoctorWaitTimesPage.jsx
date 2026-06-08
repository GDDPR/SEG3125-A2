import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DoctorCard from './DoctorCard';

function DoctorWaitTimesPage() {
    return (
        <section className="doctor-section doctor-page">
            <Container>
                <Row className="justify-content-center g-3">
                    <Col lg={8}>
                        <h1>Wait Times</h1>

                        <DoctorCard variant="details" className="doctor-wait-time-card mb-3">
                            <p className="doctor-wait-time-text">
                                <span className="doctor-wait-time-line">The current wait time for walk-ins is</span>
                                <span className="doctor-wait-time-line">
                                    <span className="doctor-wait-time-number">25</span>
                                    minutes.
                                </span>
                            </p>
                        </DoctorCard>

                        <DoctorCard variant="details" className="doctor-book-instead-card">
                            <h2>Book appointment instead?</h2>
                            <Button as={Link} to="/service/book" className="doctor-primary-button">
                                Click Here
                            </Button>
                        </DoctorCard>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DoctorWaitTimesPage;
