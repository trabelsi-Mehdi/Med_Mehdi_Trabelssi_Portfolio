import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant Ingénieur à l'UTT",
          "Spécialité Data Science & IA",
          "Développeur Full Stack",
          "Passionné par l'IoT",
          "Futur Ingénieur Data & IA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
