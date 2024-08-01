import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Soundbar from './components/Soundbar';
import './App.scss';

function App() {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
