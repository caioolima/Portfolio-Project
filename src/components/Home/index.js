import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "aio".split("");
  const interestArray = "Especialista em Tecnologias Web".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="title-home">
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _12`}>l</span>
            <span className={`${letterClass} _12`}>á,</span>
            <br />
            <span className={`${letterClass} _13`}>Eu</span>
            <span className={`${letterClass} _14`}>&nbsp;sou</span>
            <img src={LogoTitle} alt="Caio" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div className="logo-big">
          <Logo />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
