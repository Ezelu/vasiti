
import * as React from 'react';
import './App.css';
import NavBar from './components/Header/Nav1/NavBar';
import Main_Nav from './components/Header/Main_Nav/Main_Nav';
import Hero from './components/Hero/Hero';
import HeroTestimony from './components/HeroTestimony/HeroTestimony';
import Testimonies from './components/Testimonies/Testimonies';



export default function App () {





  return (
    <div>
      <NavBar />
      <br />
      <Main_Nav />
      <Hero />
      <HeroTestimony />
      <Testimonies />
    </div>
  );
}


