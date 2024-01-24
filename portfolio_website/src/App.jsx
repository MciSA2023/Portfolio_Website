import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <About />
      <Projects />
      
    </div>
  );
}

export default App;
