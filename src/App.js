import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import NetflixRow from './Components/NetflixRow/NetflixRow';
import ActionRow from './Components/ActionRow/ActionRow';
import RomanticRow from './Components/RomanticRow/RomanticRow';
import Footer from './Components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NetflixRow />
      <ActionRow />
      <RomanticRow />
      <Footer />
    </div>
  );
}

export default App;
