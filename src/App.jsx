import './App.css';
import { useState } from 'react';
import Hamburger from './components/Leerkracht/Header/Hamburger.jsx';
import Header from './components/Leerkracht/Header/Header.jsx';
import Data from './api/Testdata/Annick.json';
import Lesoverzicht from './components/Leerkracht/Lesoverzicht/Lesoverzicht.jsx';

function App() {
  //event handlers
  const [burgerToggled, setBurgerToggled] = useState(false);
  return (
    <div>
      <Header
        burgerToggled={burgerToggled}
        setBurgerToggled={setBurgerToggled}
      />
      <div>
        {' '}
        <Hamburger burgerToggled={burgerToggled} />
        <div>
          <Lesoverzicht data={Data} />
        </div>
      </div>
    </div>
  );
}

export default App;
