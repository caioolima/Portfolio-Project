/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faCss3,
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faGitAlt,
  faNode,
  faJava, // Add Java icon
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const aboutArray = "Sobre Mim".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>

          <p>
            Eu Sou estudante de Análise e Desenvolvimento de Sistemas na ULBRA.
          </p>
          <p>
            Sou desenvolvedor full stack e amo automatizar tarefas.
          </p>
          <p>
            Também sou um competidor em programação. Python é minha linguagem
            favorita, mas quando se trata de competições, prefiro usar Java.
          </p>
          <p>Sou apaixonado por desenvolvimento de software.</p>
          <p>
            Se eu precisasse me definir em uma frase, seria como ambicioso e
            apaixonado por inovação!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#007396" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#68A063" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
