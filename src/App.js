import './App.css';
import { useEffect } from 'react';


const tg = window.Telegram?.WebApp;


function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  }


  return (
    <div className="App">
      <p>Work</p>
      <button onClick={onClose}>click</button>
    </div>
  );
}

export default App;
