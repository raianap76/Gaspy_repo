import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Estudante do curso de ciência da computação, no momento estou no 7° período do curso. Entrei para a área de tecnologia de “paraquedas”, começou por curiosidade mesmo, para ver como as aplicações que usamos no dia a dia funciona, desde então sou apaixonada por front ent, sempre acompanho as novas tecnologias disponibilizadas e logo vou aprendendo a usar.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Trabalhei por 10 meses com React JS , HTML, CSS e javascript  além de desenvolver CHATBOTS do zero para automatizar vendas de pacotes de planos de telefonia móvel, desde então não paro de praticar e estudar essas tecnologias. Pode ampliar meu conhecimento desde o suporte em TI até a área de testes, em meu penúltimo estagio na modular pode aprender como é os bastidores de ser um tester, fiz testes de todos os tipos.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
