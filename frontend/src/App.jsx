import {useEffect, useState} from "react";
import './App.css';
import StaticScreen from "./components/StaticScreen";
import DigitalScreen from "./components/DigitalScreen";
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
       <div className="App">
           <h1>Inventory</h1>
           <div>
               <ul id="List" className="static">
                   <h1>Static screens</h1>
                   {staticScreens ? staticScreens.map((s, index) => (
                       <div>
                           <li key={index} style={{listStyle: 'none'}}>
                               <StaticScreen {...s} />
                           </li>
                       </div>
                   )) : 'loading'}
               </ul>
               <ul id="List" className="digital">
                   <h1>Digital screens</h1>
                   {digitalScreens ? digitalScreens.map((s, index) => (
                       <li key={index} style={{listStyle: 'none'}}>
                           <DigitalScreen {...s} />
                       </li>
                   )) : 'loading'}
               </ul>
               <ul id="List" className="group">
                   <h1>Screen groups</h1>
                   {groups ? groups.map((g, index) => (
                       <div className="Group">
                           Id: {g.id}, name: {g.name}
                           <li key={index}>
                               Screen ids in the group:
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
       </div>
    )
}

export default App;
