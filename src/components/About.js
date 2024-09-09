import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function About() {
  return (
    <main>
      <div
        class="min-w-80 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg p-8 w-1/2"
        style={{ fontFamily: "DM Sans" }}
      >
        <h1 class="text-3xl font-bold p-4">About</h1>
        <p class="w-1/2 mx-auto pb-4">
        Hey! I'm Malycia, a designer who's been creating responsive wireframes and prototypes, initiating UI kits, and reviewing user flows since September 2023 :)
        <br />
        <br />
        I've worked with many teams to redesign their existing website, or even create it from scratch. In all of these teams, I've had to create a space for designers that wasn't previously fleshed out by showcasing my skills and their benefits to the team's image.
          <br />
          <br />
I'm also very passionate about bringing more diverse perspectives into tech. I've previously done work with Hack Club (a non-profit org for teens in tech) to bring more girls and non-binary students into the space! I've hosted hackathons and networking dinners across the US and have worked to make a real impact in participants' lives.
        </p>
      </div>
    </main>
  );
}

export default About;
