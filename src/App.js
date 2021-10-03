import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  
  return (
    <>
      <Navbar title='Text Utils2' aboutTextUtils='About text utils'/> {/* props are properties */}
      {/* <Navbar/> */} {/* props are properties */}
      {/* porps are not to be changed and used as read only */}

      <TextForm heading='Enter the text to analyze below'/>
      <About/>
      
    </>
  );
}

export default App;


/* control application from app.js for eg dark mode light mode */