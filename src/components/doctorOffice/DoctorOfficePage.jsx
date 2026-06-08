import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';

import DoctorBookingPage from './DoctorBookingPage';
import DoctorConfirmationPage from './DoctorConfirmationPage';
import DoctorContactPage from './DoctorContactPage';
import DoctorHomePage from './DoctorHomePage';
import DoctorServiceDetailsPage from './DoctorServiceDetailsPage';
import DoctorServicesPage from './DoctorServicesPage';
import DoctorWaitTimesPage from './DoctorWaitTimesPage';

function DoctorOfficePage() {
    return (
        <div className="doctor-site">
            <Navbar expand="lg" bg="white" variant="light" fixed="top" className="doctor-navbar shadow-sm">
                <Container>
                    <Navbar.Brand as={NavLink} to="/service" className="fw-bold">
                        Broadview Clinic
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="doctor-navbar" />

                    <Navbar.Collapse id="doctor-navbar">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/service" end>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/service/services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/service/book">
                                Book
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/service/contact">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/service/wait-times" className="doctor-wait-nav-button">
                                Wait Times
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Routes>
                    <Route index element={<DoctorHomePage />} />
                    <Route path="services" element={<DoctorServicesPage />} />
                    <Route path="services/:serviceId" element={<DoctorServiceDetailsPage />} />
                    <Route path="book" element={<DoctorBookingPage />} />
                    <Route path="confirmation" element={<DoctorConfirmationPage />} />
                    <Route path="contact" element={<DoctorContactPage />} />
                    <Route path="wait-times" element={<DoctorWaitTimesPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default DoctorOfficePage;
