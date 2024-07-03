import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Projects() {
  return (
    <main>
      <div
        class="min-w-64 w-1/2 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg p-8"
        style={{ fontFamily: "DM Sans" }}
      >
        <h1 class="text-3xl font-bold">Projects</h1>


        {/* IDEAS:
            - link to all gh repos at the bottom? */}


        {/* FIRST PROJECT */}
        <div class="text-left w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Teachable Machine</h2>
          <img src="https://cloud-p3yij1ns1-hack-club-bot.vercel.app/0screenshot_2024-07-03_121346.png" alt="Teachable Machine front page" class="my-4" />
          <p>This was my submission for Hack Club's <a href="https://workshops.hackclub.com/teachable_machine/" target="_blank">Teachable Machine workshop</a>! I wanted to try something new, and thought that this would be a great way to try a new project and learn some more about machine learning.</p>
          <br />
          <a href="https://github.com/FireBreather65/hc-workshop-teachable-machine" target="_blank" class="underline text-blue-600">Github repo<br /></a>
          <a href="https://firebreather65.github.io/hc-workshop-teachable-machine/" target="_blank" class="underline text-blue-600">Live demo</a>
          <br /><br />
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              HTML
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              CSS
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              AI/ML
            </p>
          </div>
        </div>

        {/* SECOND PROJECT */}
        <div class="text-left w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Wizard Orpheus</h2>
          <img src="https://cloud-p3yij1ns1-hack-club-bot.vercel.app/1screenshot_2024-07-03_121402.png" alt="Wizard Orpheus front page" class="my-4" />
          <p>This project was originally created at a workshop during <a href="https://wonderland.hackclub.com/" target="_blank">Wonderland</a>, a 48-hour hackathon hosted in Boston. I decided to continue working on it after the workshop to improve the design and functionality, and this is the result &#x1F601;</p>
          <br />
          <a href="https://github.com/FireBreather65/hc-workshop-wonderland" target="_blank" class="underline text-blue-600">Github repo<br /></a>
          <a href="https://firebreather65.github.io/hc-workshop-wonderland/" target="_blank" class="underline text-blue-600">Live demo</a>
          <br /><br />
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              HTML
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              CSS
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              JS
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              AI/ML
            </p>
          </div>
        </div>

        {/* THIRD PROJECT */}
        <div class="text-left w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Personal Portfolio</h2>
          <p>I'm also very proud of this website &#x1F60A;</p>
          <br />
          <a href="https://github.com/FireBreather65/my-portfolio" target="_blank" class="underline text-blue-600">Github repo<br /></a>
          <br />
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              HTML
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              CSS
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              REACT
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              APIs
            </p>
          </div>
        </div>

        <p class="text-xl font-bold">You can find more of my projects here: <a href="https://github.com/FireBreather65?tab=repositories" target="_blank" class="underline text-blue-600">Github repos<br /></a></p>

      </div>
    </main>
  );
}

export default Projects;