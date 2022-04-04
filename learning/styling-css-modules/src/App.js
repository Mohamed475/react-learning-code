// import logo from './logo.svg';
// import './App.css';

// import React, { useEffect, useRef, useState } from 'react';

// import style from './App.module.css';

// function App() {
//   const [name, setName] = useState('');
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         value={name}
//         onChange={(e) => {
//           e.preventDefault();
//           setName(e.target.value);
//         }}
//       />
//       <div>My name: {name}</div>
//       <div>I rendered {count.current}</div>
//     </>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import style from './App.module.css';

function App() {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="App">
      <header className={`${style.header} ${!isValid && style.invalid}`}>
        <h1>Hi There</h1>
      </header>
    </div>
  );
}

export default App;
