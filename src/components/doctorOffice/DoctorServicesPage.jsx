import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DoctorCard from './DoctorCard';

const services = [
    {
        id: 'general-checkup',
        name: 'General Check-up',
        description: 'Routine wellness visits, health screenings, and prevention advice.',
    },
    {
        id: 'walk-in-consultation',
        name: 'Walk-in Consultation',
        description: 'A short visit for common health concerns, minor illness, or simple injuries.',
    },
    {
        id: 'blood-test',
        name: 'Blood Test',
        description: 'Basic lab requisitions and follow-up support for routine blood work.',
    },
    {
        id: 'vaccination',
        name: 'Vaccination',
        description: 'Routine immunizations and seasonal flu shot appointments.',
    },
];

function DoctorServicesPage() {
    return (
        <section className="doctor-section doctor-page">
            <Container>
                <h1>Services</h1>
                <p className="doctor-section-intro">
                    Review general services before booking.
                </p>

                <Row className="g-3">
                    {services.map((service) => (
                        <Col md={6} lg={3} key={service.id}>
                            <DoctorCard>
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <Button
                                    as={Link}
                                    to={`/service/services/${service.id}`}
                                    variant="outline-success"
                                    className="doctor-card-button"
                                >
                                    View Details
                                </Button>
                            </DoctorCard>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}

export default DoctorServicesPage;
