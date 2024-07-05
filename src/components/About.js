import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function About() {
  return (
    <main>
      <div
        class="min-w-64 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg p-8 sm:w-3/4 xl:w-1/2"
        style={{ fontFamily: "DM Sans" }}
      >
        <h1 class="text-3xl font-bold p-4">About</h1>
        <p class="w-1/2 mx-auto pb-4">
          I'm Malycia, a designer who's been creating responsive wireframes and
          prototypes, initiating UI kits, and reviewing user flows since
          September 2023.
          <br />
          <br />
          I've worked with many teams to redesign their existing website, or
          even create it from scratch. In all of these teams I've had to create
          a space for designers that wasn't previously fleshed out by showcasing
          my skills and their benefits to the team's image.
          <br />
          <br />I also have some side projects! With the support of Hack Club, I
          help organize hackathons across the US for girls and gender-diverse
          students to be introduced to tech. You can <a
            href="https://daysofservice.hackclub.com/"
            target="_blank"
            class="underline text-blue-600 justify-center"
          >
            learn more about us here
          </a>.
          <br />
          <br />
          If you are interested in hiring me for any design opportunities, I'd
          love to hear from you. You can contact me via email or LinkedIn DM.
        </p>
      </div>
    </main>
  );
}

export default About;