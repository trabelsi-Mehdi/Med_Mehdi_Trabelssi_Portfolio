import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour , je m'appelle <span className="purple">Med Mehdi Trabelssi </span>,
            je suis un étudiant à l'<span className="purple">Université de Technologie de Troyes .</span>
            <br />
             <ul> 
              <br/>
            <li className="about-activity">- Je suis en 1ère année Systèmes Numériques (SN)</li> 
            <li className="about-activity">- Je suis Futur Ingénieur Data & IA</li>
            <li className="about-activity"  >- Je suis un developpeur Full Stack </li>
            <br />
            </ul>
            
      En dehors du codage, voici quelques activités que j'adore :

          <ul>
            <br/>
            <li className="about-activity">
              - L'auto-formation et l'apprentissage continu
            </li>
            <li className="about-activity">
              - Participer à la vie associative
            </li>
            <li className="about-activity">
              - Jouer au basketball et ping-pong
            </li>
          </ul>
</p>
 <br />
          <p className="rainbowText rainbowCenter">
            "Chaque jour est une opportunité d'apprendre et de grandir !"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
