import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            Estou sempre interessado em ampliar meu conhecimento de linguagens
            de programação, sempre buscando dominar cada uma antes de seguir
            adiante. Mantenho-me atualizado com as últimas inovações
            tecnológicas que surgem.
          </p>
          <p>
            Estou em busca de uma oportunidade em uma empresa que ofereça
            projetos desafiadores e diversificados, onde eu possa aplicar e
            aprimorar minhas habilidades em diversas linguagens de programação.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
