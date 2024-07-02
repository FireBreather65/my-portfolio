import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Scrapbook from './components/Scrapbook';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/scrapbook' element={<Scrapbook />} />
      </Routes>
    
    <div class="min-w-64 w-1/2 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg pb-4" style={{fontFamily: 'DM Sans'}}>
      <img src="https://cloud-dr0rikspp-hack-club-bot.vercel.app/0untitled_design__1_.png" alt="Mountain at sunset in Olympia, Washington" class="w-full object-cover rounded-t-2xl shadow-lg h-80" />

      {/* HEADER SECTION */}
      <div className="header-content" class="my-6 text-center">
        <img src="https://cloud-i5wn1rmma-hack-club-bot.vercel.app/0pxl_20240220_005648933.jpg" alt="Picture of me in front of trees" class="w-36 h-36 -mt-24 rounded-full border-4 border-orange-100 border-solid object-cover inline" />
        <h1 class="text-3xl font-bold">Malycia Ashley <span class="text-xl opacity-40 inline align-middle">(they/them)</span></h1>
        <p class="m-auto w-2/5">UI Designer | Proficient in Figma | Teamwork | Accessibility</p>
        <div className="contact-nav" class="my-2">
          <a href="https://docs.google.com/document/d/1XbUdY7ef-mh0TaYS7mJinEW-JWX-bpb2kg_1pnk-ObU/edit?usp=sharing" target="_blank">
            <img src="https://cloud-62u98qd5f-hack-club-bot.vercel.app/0mdi_resume.svg" alt="Resume icon" class="w-8 h-8 ml-4 inline-block align-middle" />
          </a>
          <a href="https://www.linkedin.com/in/malycia-ashley/" target="_blank">
            <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/2mdi_linkedin.svg" alt="LinkedIn icon" class="w-8 h-8 ml-4 inline-block align-middle" />
          </a>
          <a href="mailto:malyciaashley@gmail.com" target="_blank">
            <img src="https://cloud-i6vrdd91r-hack-club-bot.vercel.app/0mdi_email.svg" alt="Mail icon" class="w-8 h-8 ml-4 inline-block align-middle" />
          </a>
          <a href="https://github.com/FireBreather65" target="_blank">
            <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/1mdi_github.svg" alt="GitHub icon" class="w-8 h-8 ml-4 inline-block align-middle" />
          </a>
        </div>
      </div>

      {/* NAV SECTION */}
      <div className="section-nav" class="m-8 flex flex-row justify-center">
      
        <Link to="/about">
          <div class="flex flex-col m-4 items-center">
            <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/0priscilla-du-preez-k8xygbw4ahg-unsplash__1_.jpg" alt="Two people holding coffee" class="w-16 h-16 rounded-full object-cover mb-1" />
            <p>About</p>
          </div>
        </Link>

        
        <Link to="/experience">
          <div class="flex flex-col m-4 items-center">
            <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/1ian-dooley-dj7bwa-gwks-unsplash__1_.jpg" alt="Tech setup with laptop and coffee" class="w-16 h-16 rounded-full object-cover mb-1" />
            <p>Experience</p>
          </div>
        </Link>

        
        <Link to="/projects">
          <div class="flex flex-col m-4 items-center">
            <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/3goran-ivos-ioykdikzlqw-unsplash__1_.jpg" alt="Laptop on an ottoman" class="w-16 h-16 rounded-full object-cover mb-1" />
            <p>Projects</p>
          </div>
        </Link>

        <Link to="/scrapbook">
          <div class="flex flex-col m-4 items-center">
            <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/2rirri-p_swqcxuc1k-unsplash__1_.jpg" alt="Polaroids in a scrapbook" class="w-16 h-16 rounded-full object-cover mb-1" />
            <p>Scrapbook</p>
          </div>
        </Link>
      </div>

      {/* FOOTER SECTION */}
      <footer>
        <p>Made with ❤️ by Malycia Ashley</p>
      </footer>
   </div>
</main>
  );
}

export default App;