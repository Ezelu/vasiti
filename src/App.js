
import * as React from 'react';
import './App.css';
import NavBar from './components/Header/Nav1/NavBar';
import Main_Nav from './components/Header/Main_Nav/Main_Nav';
import Hero from './components/Hero/Hero';
import HeroTestimony from './components/HeroTestimony/HeroTestimony';
import Testimonies from './components/Testimonies/Testimonies';
import HeroTestimony2 from './components/HeroTestimony2/HeroTestimony2';
import Footer from './components/Footer/Footer';
import { data1, data2 } from './components/Testimonies/data';


export default function App () {





  return (
    <div>
      <NavBar />
      <br />
      <Main_Nav />
      <Hero />
      <HeroTestimony />
      <Testimonies data={data1}/>
      <HeroTestimony2 />
      <Testimonies data={data2}/>
      <Footer />
    </div>
  );
}


