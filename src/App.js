import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { createBrowserHistory } from "history";
import {
  Route,
  Link,
  HashRouter,
  Switch
} from "react-router-dom";


const history = createBrowserHistory();

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode = ()=>{
   if(mode ==='light'){
    setMode('dark');
    document.body.style.background = '#0e0b1e';
    document.body.style.color = 'white';
    showAlert('Dark Mode is Enabled', 'success');  
  } else {
    setMode('light');  
    document.body.style.background = 'white'; 
    document.body.style.color = 'black';
    showAlert('Light Mode is Enabled', 'success');
   } 
  }
  
  return (
    <>
      <HashRouter basename='/'>

        <Navbar 
          title='Text Utils' 
          aboutTextUtils='About text utils'
          mode={mode} 
          toggleMode={toggleMode} /> {/* props are properties */}
        {/* <Navbar/> */} {/* props are properties */}
        {/* props are not to be changed and used as read only */}

        <Alert alert={alert} />
        
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode}/>
            </Route>
          
          {/* why to use exact?
            /users --> Cmp1
            /users/home --> Cmp2
          */}
      </HashRouter>

      
    </>
  );
}

export default App;


/* control application from app.js for eg dark mode light mode */