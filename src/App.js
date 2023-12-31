import './App.css';
import AboutContent from './pages/AboutContent';
import ExperienceContent from './pages/ExperienceContent';
import Header from './pages/Header';
import ProjectContent from './pages/ProjectContent';
import SkillContent from './pages/SkillContent';
import StarContent from './pages/StarContent';
function App() {
  const color =[
    '#f2b3b3',
    '#f2eeb3',
    '#b3f2e5',
    '#b3b7f2',
    '#F2B3DC',
    '#f2b3cb',
    '#eaf2b3',
  ]
const starItem = () =>{
  let arr=[];
  for(let i=0;i<10;i++){
    let randomPosition= Math.floor(Math.random() * 100) + 1;
    let randomTime= Math.floor(Math.random() * 5000) + 1000;
    let randomColor= color[Math.floor(Math.random() * color.length)];
    arr.push(<StarContent key={i} left={randomPosition} time={randomTime} color={randomColor}></StarContent>);
  }

  return arr;
}
  return (
    <div className="App">
      <Header></Header>
      <AboutContent></AboutContent>
      <SkillContent></SkillContent>
      <ExperienceContent></ExperienceContent>
      <ProjectContent></ProjectContent>
      <div className='star-box'>
      {
        starItem()
      }
      </div>
      <footer>
      <div className="center">
        <span>Copyright 2024. Web Front-end developer portfolio-- by SoYeon Jo 💗</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
