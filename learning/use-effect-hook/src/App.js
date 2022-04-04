import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Child from './Child';

function App() {
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  console.log('Parent is re-rendered.');

  const onChangeHandler = useCallback(() => 1, [dark]);

  return (
    <>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>Theme</div>
      <Child onChange={onChangeHandler} />
    </>
  );
}

export default App;
