import React from 'react';
import './App.css';
import CGU_Login from './cgu_login'; // 引入我們剛寫好的元件

function App() {
  return (
    <div className="App">
      <div>
        { CGU_Login() } 
      </div>
    </div>
  );
}

export default App;
