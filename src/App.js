
import './App.css';
import "./app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';
// import ParticlesComponent from "./components/particle"
import  Navbar  from './components/navbar';
import { Intro } from './components/intro';
import { Gallery } from './components/gallery';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Amenities } from './components/amenities';
import { Footer } from './components/footer';

function App() {
  return (
    <Stack className="App bg-primary">
      {/* <div class="snow"></div> */}
      <Navbar />
      <Intro />
      <About />
      <Amenities/>
      <Gallery />
      <Contact />
      <Footer />
    </Stack>
  );
}

export default App;
