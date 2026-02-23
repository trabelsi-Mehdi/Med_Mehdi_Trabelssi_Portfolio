import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import c from "../../Assets/Projects/Capture d’écran 2026-02-04 194229.png";
import emotion from "../../Assets/Projects/emotion.png";
import Jest from "../../Assets/Projects/Jest.png"
import site from "../../Assets/Projects/ecommerce.png"
import site2 from "../../Assets/image.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple"> récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici des exemples de projets que j'ai réalisé : 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c}
              isBlog={false}
              title="Drive Wise "
              description="Une plateforme qui centralise la gestion efficace des clients, des responsables des auto-écoles et des administrateurs, ainsi que la création automatique de contenu pédagogique pour le code de la route (tests et documents) avec l'intelligence artificielle. Compétences Acquises : React, Big Data, Architecture Micro-Services, Manipulation de différentes bases de données (SQL et NoSQL), TensorFlow, IA, Python, Spring Boot, Java"
              demoLink="https://youtu.be/VBi7qYVxFsU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jest}
              isBlog={false}
              title="Jest Game"
              description="Développement d'un jeu de cartes stratégique multijoueur en Java. Le projet intègre un système d'intelligence artificielle à trois niveaux de difficulté (Facile, Moyenne, Difficile). Compétences acquises : Architecture client-serveur, persistance de données (sauvegarde/chargement de parties) , algorithmes intelligents de calcul de scores, POO, Java, Sockets, Patrons de conception, NoSQL. "
              ghLink="https://github.com/trabelsi-Mehdi/JestGame"
              demoLink="https://www.youtube.com/watch?v=j3ZfckKI7Nk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site2}
              isBlog={false}
              title="Modèle IA "
              description="Un modèle de langage basé sur l’intelligence artificielle utilisant des techniques d’apprentissage profond pour comprendre et générer automatiquement du texte. Compétences acquises : compréhension du fonctionnement des modèles de langage et des bases du deep learning, manipulation et déploiement de modèles d’IA en local, utilisation d’outils d’exécution de modèles (LM Studio, llama.cpp, etc.), conception et optimisation de prompts, analyse des performances et des limites des modèles, ainsi que sensibilisation aux enjeux éthiques et à la protection des données liés à l’intelligence artificielle."
              ghLink="https://github.com/trabelsi-Mehdi/Modele_IA"
              demoLink="https://youtu.be/yWczeqHHFus"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="J'ai entraîné un classificateur CNN en utilisant le jeu de données FER-2013 avec Keras et TensorFlow comme backend. Le classificateur a réussi à prédire différents types d'émotions humaines. La précision la plus élevée obtenue avec le modèle était de 60,1 %. Ensuite, j'ai utilisé OpenCV pour détecter le visage dans une image, puis j'ai transmis ce visage au classificateur afin de prédire l'émotion de la personne."
              ghLink="https://github.com/trabelsi-Mehdi/Face_emotion_Detector"
              demoLink="https://youtu.be/optHrEFFb-o"
            />
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="Site E-Commerce "
              description="Développement d'une application e-commerce complète avec gestion intégrée des produits, paniers d'achats et tableau de bord administrateur. Le projet implémente une architecture full-stack moderne avec interface utilisateur réactive et système de gestion des commandes en temps réel. Compétences acquises : React (développement frontend), Express.js (API REST backend), JavaScript, MongoDB, Git , CSS Tailwind, architecture MVC, authentification et sécurité , modélisation de données ."
              demoLink="https://www.youtube.com/watch?v=t1IDprJXt4c"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
