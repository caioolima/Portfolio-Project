import { useState } from "react";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPython,
  faJava,
  faNodeJs,
  faReact,
  faHtml5,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Projects = () => {
  const projects = [
    {
      title: "Code Reader",
      description:
        "Aplicativo em Flutter que utiliza a câmera para ler códigos de barras e QR codes, mantendo um histórico das ações realizadas.",
      link: "https://github.com/caioolima/CODE_READER---AS",
      techIcons: [faFlutter],
    },
    {
      title: "Árvore Binária Balanceada",
      description:
        "Implementação em Java de uma Árvore Binária Balanceada, que otimiza operações de busca, inserção e remoção.",
      link: "https://github.com/caioolima/ArvoreBinariaBalanceadaa",
      techIcons: [faJava],
    },
    {
      title: "Conversor Bitcoin",
      description:
        "Aplicação em Flutter para converter dólares em Bitcoin, com um histórico de conversões.",
      link: "https://github.com/caioolima/Conversor_Bitcoin",
      techIcons: [faFlutter],
    },
    {
      title: "Sistema de Cadastro de Alunos",
      description:
        "Programa em Python que realiza o cadastro de alunos e permite buscas por nome.",
      link: "https://github.com/caioolima/Cadastro_Aluno_Sistema",
      techIcons: [faPython],
    },
    {
      title: "Website Institucional",
      description:
        "Website para a 'GMR Lubrificantes' com um design moderno, seções de serviços, promoções e formulário de contato.",
      link: "https://github.com/caioolima/Website-Institucional",
      techIcons: [faHtml5],
    },
    {
      title: "Connecter Life",
      description:
        "Rede social para mochileiros desenvolvida em React.js com back-end em Node.js e MongoDB.",
      link: "https://github.com/caioolima/deploy-frontend",
      techIcons: [faReact, faNodeJs],
    },
    {
      title: "Recipe App",
      description:
        "Aplicação web com dicas deliciosas de receitas, apresentando uma interface amigável e receitas categorizadas.",
      link: "https://github.com/caioolima/recipe-app",
      techIcons: [faReact],
    },
    {
      title: "Sistema de Funcionários",
      description:
        "Aplicação em Node.js para gerenciar funcionários, com funcionalidades para cadastro, atualização e exclusão de registros.",
      link: "https://github.com/caioolima/AS---Teste-API.git",
      techIcons: [faNodeJs],
    },
  ];

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1 className="title-project">Projetos</h1>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <div className="tech-icons">
                  {project.techIcons.map((icon, idx) => (
                    <FontAwesomeIcon
                      key={idx}
                      icon={icon}
                      color="#333"
                      className="tech-icon"
                    />
                  ))}
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} color="#b9b9b9" /> GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
