import React, {useState} from 'react';
import Scrollbar from './Scrollbar';
import Picture from './Picture';

function App() {
  const [size, setSize] = useState(250);

  const handleSizeChange = (value) => {
    setSize(value);
  };

  return (
    <div className='App'>
      <h1>Scrollbar Picture Resizer</h1>
      <Scrollbar onChange = {handleSizeChange}></Scrollbar>
      <Picture size={size}></Picture>
    </div>
  );
}

export default App;