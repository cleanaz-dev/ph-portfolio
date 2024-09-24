"use client"

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md="auto">
          <div className=" w-auto">
              <h2 className="mb-3">More About Me 😎</h2>
              <p>
              <b>Web development</b> is my true passion. I thrive on building dynamic, user-friendly apps using a diverse tech stack. <b>React</b> and <b>Next.js</b> power my frontends, while <b>Prisma</b> and <b>MongoDB</b> handle the backend heavy lifting. I'm all about creating seamless experiences, from intuitive interfaces to robust server-side logic. My toolkit includes cloud deployment solutions and AI integration, with <b>JavaScript</b> as my primary language. I'm <b>constantly</b> exploring new technologies and methodologies to <b>enhance</b> my skills and deliver innovative solutions.

              </p>
              
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
