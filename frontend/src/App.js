import {useEffect, useState} from "react";
import css from './App.css';
function App() {
const [screens, setScreens] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/screens")
          .then(res => res.json())
          .then(
              (result) => {
                  setScreens(result.screens);
              },
              (error) => {
                  console.error(error)
              }
          )
  }, [])
    return (
        <ul>
            {screens ? screens.map((s, index) => (
                <li key={index}>
                    {s.name}
                </li>
            )) : 'loading'}
        </ul>)
}

export default App;
