import Header from './components/headerComponent'
import Experience from './components/experienceComponent'
import Skills from './components/skillComponent'
import Interest from './components/interestComponent'
import Projects from './components/projectComponent'
import Contact from './components/contactComponent'

function App() {
    return (
        <div className = "main-container">
            <Header />
            <hr/>
            <Experience />
            <hr/>
            <Skills />
            <hr/>
            <Projects />
            <hr/>
            <Interest />
            <hr/>
            <Contact />
            <hr/>
        </div>
    );
  }
  
  export default App;