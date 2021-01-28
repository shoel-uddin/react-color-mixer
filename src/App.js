import './App.css';
import { useState } from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }

  return (
    
    <div style={appStyle}>
      <ColorPicker 
        label = "R"
        color ={red}
        setColor= {setRed}
      />
      <br/>
      <ColorPicker 
        label = "G"
        color ={green}
        setColor= {setGreen}
      />
      
      <br/>
      <ColorPicker 
        label = "B"
        color ={blue}
        setColor= {setBlue}
      />
    </div>
  );
}

export default App;
