import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI <span className="purple"> ME </span> PRÉSENTER
            </h1>
            <p className="home-about-body">
            Je suis un étudiant ingénieur à l'Université de Technologies de Troyes  
            et un <span className="purple"> Développeur Full Stack </span> 
              <br />
              <br />Je maîtrise les bases, tel que
              <i>
                <b className="purple"> Python , Javascript , Java et Data  </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont : <br />
              <i className="rainbowText rainbowCenter">
                <b>
                  - Intelligence Artificielle <br />
                  - Data Science <br />
                  - Internet des objets (IoT) <br />
                </b>
              </i>
              <br />
              <br />
              Chaque fois que cela est possible, j'applique ma passion pour
               créer des solutions intelligentes avec <b className="purple">TensorFlow</b> et 
              <i>
                <b className="purple">
                  {" "}
                  des frameworks de machine learning modernes                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> PyTorch et Scikit-learn</b>
              </i>
              &nbsp; pour les systèmes IoT et l'analyse de données.
              <br />
              <br />
              <p style={{ color: "white" }}>
                Je recherche une alternance de 24 mois pour septembre 2026 dans les domaines de l'<b className="purple">Intelligence Artificielle</b>, de la <b className="purple"> Data Science</b> ou du <b className="purple">développement Full Stack</b>.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouve-moi sur</h1>
            <p>
            N'hésitez pas à <span className="purple">vous connecter</span> avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/trabelsi-Mehdi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mehdi-trabelssi-9150ab268"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mohamed_mehdi.trabelssi@utt.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/trabelsi._.mehdi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
