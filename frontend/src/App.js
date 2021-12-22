import {useEffect, useState} from "react";
import css from './App.css';
function App() {
const [staticScreens, setStaticScreens] = useState([]);
const [groups, setGroups] = useState([]);
const [digitalScreens, setDigitalScreens] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/screens")
          .then(res => res.json())
          .then(
              (result) => {
                  setStaticScreens(result.staticScreens);
                  setDigitalScreens(result.digitalScreens);
                  setGroups(result.groups);
              },
              (error) => {
                  console.error(error)
              }
          )
  }, [])
    return (
       <div>
           <ul>
               {staticScreens ? staticScreens.map((s, index) => (
                   <li key={index}>
                       {s.name}
                       <img src={s.content}/>
                   </li>
               )) : 'loading'}
           </ul>
           <ul>
               {digitalScreens ? digitalScreens.map((s, index) => (
                   <li key={index}>
                       {s.name}
                       <iframe src={s.content} width={500} height={500}/>
                   </li>
               )) : 'loading'}
           </ul>
           <ul>
               {groups ? groups.map((g, index) => (
                  <div>
                      Group {index}
                      <li key={index}>
                          <ul>
                              {g.screenIds.map((id => {
                                  return (
                                      <li key={id}>
                                          {id}
                                      </li>
                                  )
                              }))}
                          </ul>

                      </li>
                  </div>

               )) : 'loading'}
           </ul>
       </div>
    )
}

export default App;
