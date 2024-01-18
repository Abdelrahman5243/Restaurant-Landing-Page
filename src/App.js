import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollAnimation from "./Components/ScrollAnimation"


function App() {
  return (
    <div className="App">
<Home/>
<ScrollAnimation>
<About/>
</ScrollAnimation>
<ScrollAnimation>
<Work/>
</ScrollAnimation>
<ScrollAnimation>
<Testimonial/>
</ScrollAnimation>
<ScrollAnimation>
<Contact/>
</ScrollAnimation>
<Footer/>
</div>
  );
}

export default App;
