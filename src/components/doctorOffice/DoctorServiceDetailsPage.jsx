import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import DoctorCard from './DoctorCard';

const services = [
    {
        id: 'general-checkup',
        name: 'General Check-up',
        description: 'Routine wellness visits, health screenings, and prevention advice.',
        duration: '30 minutes',
        note: 'Covered by most provincial or private insurance plans.',
    },
    {
        id: 'walk-in-consultation',
        name: 'Walk-in Consultation',
        description: 'A short visit for common health concerns, minor illness, or simple injuries.',
        duration: '20 minutes',
        note: 'Availability depends on same-day clinic capacity.',
    },
    {
        id: 'blood-test',
        name: 'Blood Test',
        description: 'Basic lab requisitions and follow-up support for routine blood work.',
        duration: '15 minutes',
        note: 'Some lab fees may depend on your insurance coverage.',
    },
    {
        id: 'vaccination',
        name: 'Vaccination',
        description: 'Routine immunizations and seasonal flu shot appointments.',
        duration: '15 minutes',
        note: 'Please bring your health card and vaccination record if available.',
    },
];

function DoctorServiceDetailsPage() {
    const { serviceId } = useParams();
    const service = services.find((currentService) => currentService.id === serviceId) || services[0];

    return (
        <section className="doctor-section doctor-page">
            <Container>
                <Row className="g-4">
                    <Col lg={8}>
                        <p className="doctor-eyebrow">Service Details</p>
                        <h1>{service.name}</h1>
                        <p>{service.description}</p>

                        <DoctorCard variant="details" className="doctor-service-meta">
                            <p><strong>Estimated duration:</strong> {service.duration}</p>
                            <p><strong>Insurance note:</strong> {service.note}</p>
                            <p><strong>Location:</strong> 125 Broadview Avenue, Ottawa, ON K1A 0B1</p>
                            <p><strong>Hours:</strong> Monday to Friday, 8:30 AM - 5:00 PM</p>
                        </DoctorCard>

                        <Button
                            as={Link}
                            to="/service/book"
                            state={{ serviceName: service.name }}
                            className="doctor-primary-button"
                        >
                            Book this Service
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DoctorServiceDetailsPage;
