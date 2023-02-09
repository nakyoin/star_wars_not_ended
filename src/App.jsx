import React, {useState} from 'react';
import './App.css';
import Info from './components/Info/Info';
import {Characters} from './components/Info/Characters';
import Planets from './components/Info/Planets';
import Films from './components/Info/Films';
import Species from './components/Info/Species';
import Vehicles from './components/Info/Vehicles';
import Starships from './components/Info/Starships';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  const [people, setPeople] = useState(undefined);
  const {name, setName} = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [mass, setMass] = useState(undefined);
  const [hair_color, setHair_color] = useState(undefined);
  const [gender, setGender] = useState(undefined);
  const [planets, setPlanets] = useState(undefined);
  
  
  const data = fetch(`https://swapi.dev/api/people/1/`)
  
  
  
  const Walker = ({data}) => <div>
 
    <h2>{data.name}</h2>
 
   
  <Link to="/characters">Назад</Link></div> 
  const Wader = () =>  <div>
    <h2>{name}</h2>
  <Link to="/characters">Назад</Link></div> 
  const R2D2 = () =>  <div>
    <h2>Р2-Д2</h2>
  <Link to="/characters">Назад</Link></div> 
  return (
  <div>
    <Info />
    <Routes>
      <Route path="/characters" element={<Characters />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/films" element={<Films />} />
      <Route path="/species" element={<Species />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/starships" element={<Starships />} />
      <Route path='/characters/walker' element={ <Walker data = {data} />} />
      <Route path='/characters/wader' element={ <Wader />} />
      <Route path='/characters/r2d2' element={ <R2D2 />} />
    </Routes>
  </div>
  )
}



export default App;
