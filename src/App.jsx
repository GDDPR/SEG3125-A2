import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ComingSoonPage from './components/ComingSoonPage';
import DoctorOfficePage from './components/doctorOffice/DoctorOfficePage';

import storeImage from './assets/store.png'
import gameImage from './assets/game.jpg'
import dashboardImage from './assets/dashboard.png'
import dentalImage from './assets/dental.jpg'
import './App.css';


function App() {
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();
    const isServicePage = location.pathname.startsWith('/service');

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`${darkMode ? 'app dark-mode' : 'app'}${isServicePage ? ' service-app' : ''}`}>
            {!isServicePage && (
                <NavigationBar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <section id="home" className="hero-section">
                                <div className="container">
                                    <p className="eyebrow">SEG 3125 Portfolio</p>

                                    <h1>Hi, I am Kevin.</h1>

                                    <p className="hero-text">
                                        I am a computer science and math student at the University of Ottawa
                                        with an interest in software development, DevOps, and applied AI.
                                        I enjoy building practical projects, learning new technologies,
                                        and solving problems through clean, efficient code.
                                    </p>
                                </div>
                            </section>

                            <Section
                                id="work"
                                title="How I Work"
                                text="I am currently learning UI design, visual communication, and front-end development through SEG 3125. My workflow is to understand the goal of the interface, plan the layout, choose simple visual elements, then build and refine the design using React, Bootstrap, and CSS."
                            />

                            <Section
                                id="projects"
                                title="Case Studies"
                                text="These are the design projects I will build throughout the semester."
                                light={true}
                            >
                                <Row className="g-4">
                                  <Col lg={6}>
                                      <ProjectCard
                                          title="Service Website"
                                          description="Description for a future service website."
                                          image={dentalImage}
                                          link="/service"
                                      />
                                  </Col>

                                  <Col lg={6}>
                                      <ProjectCard
                                          title="Memory Game"
                                          description="Description for a future memory game."
                                          image={gameImage}
                                          link="/memory-game"
                                      />
                                  </Col>

                                  <Col lg={6}>
                                      <ProjectCard
                                          title="E-Commerce Website"
                                          description="Description for a future e-commerce website."
                                          image={storeImage}
                                          link="/ecommerce"
                                      />
                                  </Col>

                                  <Col lg={6}>
                                      <ProjectCard
                                          title="Analytics Website"
                                          description="Description for a future analytics website."
                                          image={dashboardImage}
                                          link="/analytics"
                                      />
                                  </Col>
                              </Row>
                            </Section>
                        </main>
                    }
                />

                <Route
                    path="/service/*"
                    element={<DoctorOfficePage />}
                />

                <Route
                    path="/memory-game"
                    element={
                        <ComingSoonPage
                            title="Memory Game"
                            description="This page will contain my future memory game design project."
                        />
                    }
                />

                <Route
                    path="/ecommerce"
                    element={
                        <ComingSoonPage
                            title="E-Commerce Website"
                            description="This page will contain my future e-commerce website design project."
                        />
                    }
                />

                <Route
                    path="/analytics"
                    element={
                        <ComingSoonPage
                            title="Analytics Website"
                            description="This page will contain my future analytics/dashboard design project."
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
