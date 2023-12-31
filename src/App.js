import './App.css';
import AboutContent from './pages/AboutContent';
import ExperienceContent from './pages/ExperienceContent';
import Header from './pages/Header';
import ProjectContent from './pages/ProjectContent';
import SkillContent from './pages/SkillContent';
function App() {

  return (
    <div className="App">
      <Header></Header>
      <AboutContent></AboutContent>
      <SkillContent></SkillContent>
      <ExperienceContent></ExperienceContent>
      <ProjectContent></ProjectContent>
    </div>
  );
}

export default App;
