import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faMediumM,
  faGoogle,
  faResearchgate,
  faOrcid
} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <Jumbotron fluid id='about'>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col md={10} sm={12} className='mt-3'>
            <Row>
              <Col md={4} xs={12}>
                <div style={{ display: 'block' }}>
                  <img className='portrait' src='./assets/samarth_img2.jpg' alt='Samarth Batra' />
                  <h3 className='text-center'>Samarth Batra </h3>
                  <h4 className='text-center'>Ex Software Developer @ Amazon</h4>
                  <ul className='social-links text-center'>
                    <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/sambey04' title='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/samarth-batra-4bb223164/' title='LinkedIn'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                  </ul>
                </div>
              </Col>
              <Col md={8} xs={12}>
                <h1>About</h1>
                <p className='lead'>
  I am a Master's student in Computer Science at{' '}
  <a href='https://www.stonybrook.edu/' target='_blank' rel='noopener noreferrer'>
    Stony Brook University
  </a>, with a passion for software development and innovative solutions. With over 3 years of professional experience, including roles at{' '}
  <a href='https://www.amazon.com/' target='_blank' rel='noopener noreferrer'>
    Amazon
  </a> and Cognizant, I have developed expertise in areas like API development, continuous integration, and cloud computing. I have a strong background in algorithms, data structures, and object-oriented programming, complemented by practical experience in full-stack development, automation testing, and cloud services.
</p>
<p className='lead'>
  My interests lie in designing efficient software architectures, automating workflows, and building scalable systems. I’ve contributed to significant projects, from implementing a web crawler for a hypertextual search engine to creating dynamic typing tutors that improve user accuracy. I am always eager to explore new challenges, enhance my technical skills, and contribute to impactful projects.
</p>
<p className='lead'>
  Beyond my professional work, I enjoy boxing and running to stay active and maintain a balanced lifestyle.
</p>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default About
