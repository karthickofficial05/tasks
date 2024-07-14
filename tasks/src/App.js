import './App.css';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import EarningCard from './Components/EarningCard';
import ConnectSources from './Components/ConnectSources';
import LearnCard from './Components/LearnCard';
import backgroundImage from './Components/image/background.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>

      <Navbar />
      <MainSection />
      <div className="cards-container">
        <EarningCard />
        <ConnectSources />
        <LearnCard />
      </div>
    </div>
  );
}

export default App;
