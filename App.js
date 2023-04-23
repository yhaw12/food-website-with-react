import './App.css';
import About from './components/About-us/About';
import Header from './components/Header/header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Menu/>
    </div>
  );
}

export default App;