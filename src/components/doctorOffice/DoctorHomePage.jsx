import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DoctorHomePage() {
    return (
        <section className="doctor-hero">
            <Container>
                <Row className="align-items-center g-4">
                    <Col lg={8}>
                        <p className="doctor-eyebrow">Family Doctor Office</p>
                        <h1>Friendly everyday healthcare for your family.</h1>
                        <p>
                            Broadview Clinic is a sample medical office website
                            for booking appointments, learning about common services, and
                            finding practical clinic information.
                        </p>
                        <div className="doctor-hero-actions">
                            <Button as={Link} to="/service/book" className="doctor-primary-button">
                                Book an Appointment
                            </Button>

                            <Button as={Link} to="/service/wait-times" className="doctor-primary-button">
                                Wait Times
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DoctorHomePage;
