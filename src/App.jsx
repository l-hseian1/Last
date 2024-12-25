import { Routes , Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import ProjectsInfo from './components/ProjectInfo/ProjectInfo';
import Projects from './components/Projects/Projects';

function App() {
  
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Projects/:id" element={<ProjectsInfo/>} />
      </Routes>
  );
  
}

export default App
