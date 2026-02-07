import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";
import "./StudiesCard.css";
import utt from "../../Assets/bannier-eut+utt.jpg";
import isitcom from "../../Assets/images.jpg"

function Studies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (study) => {
    setSelectedStudy(study);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudy(null);
  };

  const studiesData = [
    {
      degree: "Licence en Informatique",
      institution: "Université de Technologie de Troyes (UTT)",
      year: "2025 - Présent",
      image:utt,
      description: "L'ingénieur en SN conçoit, déploie et exploite des systèmes intelligents en réponse à des défis socio-économiques. Il s'appuie sur des connaissances théoriques et techniques tant en mathématiques et informatique qu'en communication et électronique des objets connectés, dans le but de reproduire l'intelligence humaine grâce à des machines.",
      details: {
        location: "Troyes, France",
        status: "En cours",
        specialization: "Systèmes Numériques",
        coursework: ["Intelligence Artificielle", "Programmation Avancée", "Systèmes Embarqués", "Cloud Computing"],
      },
    },
    {
      degree: "Licence nationale en sciences informatiques",
      institution: "Institut Supérieur d’Informatique et des Technologies de Communication de Hammam Sousse (ISITCom)",
      year: "2022-2025",
      image: isitcom,
      description: "Formation couvrant les bases de l'informatique, incluant la programmation, les bases de données, les systèmes informatiques et l'IA. Elle permet de développer des compétences en développement d'applications, gestion des données et administration des systèmes, tout en renforçant les capacités d'analyse et de gestion de projets informatiques.",
      details: {
        location: "Hammam Sousse, Tunisie",
        status: "Terminée",
        specialization: "Génie Logiciel",
        coursework: ["Programmation Orientée Objet", "Bases de Données", "Développement Web", "Algorithmique"],        license: "Licence validée avec mention Très Bien",
        pfe: "PFE validé avec mention Très Bien",
        demoLink: "https://www.youtube.com/watch?v=VBi7qYVxFsU&t=4s"},
    },
  ];

  return (
    <Container fluid className="studies-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={12} className="studies-container">
            <h1 style={{ fontSize: "2.3em", paddingBottom: "12px", textAlign: "center", color: "white", fontWeight: "700", letterSpacing: "0.5px" }}>
              Mes <strong className="purple" style={{ fontWeight: "700" }}>Études</strong>
            </h1>
            <p style={{ textAlign: "center", paddingBottom: "50px", fontSize: "1.05em", color: "#b8b8b8", fontWeight: "400", letterSpacing: "0.3px" }}>
              Parcours académique et formations professionnelles
            </p>

            <Row>
              {studiesData.map((study, index) => (
                <Col md={6} key={index} className="studies-card-col">
                  <div
                    className="studies-card"
                    onClick={() => handleShowModal(study)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="studies-card-image">
                      <img src={study.image} alt={study.institution} />
                    </div>
                    <div className="studies-card-header">
                      <h3 className="degree">{study.degree}</h3>
                      <span className="year">{study.year}</span>
                    </div>
                    <h4 className="institution">{study.institution}</h4>
                    <p className="description">{study.description}</p>
                    <p className="click-hint">Cliquez pour plus de détails</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="studies-modal"
      >
        <Modal.Header closeButton className="studies-modal-header">
          <Modal.Title>
            <strong>{selectedStudy?.degree}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="studies-modal-body">
          {selectedStudy && (
            <>
              <div className="modal-image-container">
                <img
                  src={selectedStudy.image}
                  alt={selectedStudy.institution}
                  className="modal-image"
                />
              </div>
              <div className="modal-content">
                <h5 className="purple">{selectedStudy.institution}</h5>
                <p className="modal-period">
                  <strong>Période:</strong> {selectedStudy.year}
                </p>
                <p className="modal-location">
                  <strong>Lieu:</strong> {selectedStudy.details.location}
                </p>
                <p className="modal-status">
                  <strong>Statut:</strong>
                  <span className={`status-badge ${selectedStudy.details.status === "En cours" ? "active" : "completed"}`}>
                    {selectedStudy.details.status}
                  </span>
                </p>
                <p className="modal-specialization">
                  <strong>Spécialisation:</strong> {selectedStudy.details.specialization}
                </p>

                {selectedStudy.details.license && (
                  <p className="modal-license">
                    <strong> {selectedStudy.details.license}</strong>
                  </p>
                )}

                {selectedStudy.details.pfe && (
                  <p className="modal-pfe">
                    <strong> {selectedStudy.details.pfe}</strong>
                  </p>
                )}

                {selectedStudy.details.demoLink && (
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <a
                      href={selectedStudy.details.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="demo-link-btn"
                    >
                       Voir la démo sur YouTube
                    </a>
                  </div>
                )}

                <h6 className="purple" style={{ marginTop: "20px" }}>
                  Cours et Compétences:
                </h6>
                <div className="coursework-list">
                  {selectedStudy.details.coursework.map((course, idx) => (
                    <span key={idx} className="coursework-item">
                      {course}
                    </span>
                  ))}
                </div>

                <p className="modal-description" style={{ marginTop: "20px" }}>
                  {selectedStudy.description}
                </p>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Studies;
