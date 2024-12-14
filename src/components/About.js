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
        Ever since I was a kid, I knew I wanted a job in a creative field. Through the years I tried dabbling in writing, beading, origami, even piano - but when I obtained my GED at 16 and discovered the field of UX design, I knew I had found my calling. I fell in love with designing interfaces and the ability to use my natural creativity to positively impact users and the world.
        <br />
        <br />
        My past jobs have taught me the importance of collaboration, communication, and attention to detail - all crucial skills in my journey into UX. I’m also committed to equity-focused design, as I've found that hearing from diverse perspectives can positively impact the experience for all users.
        </p>
      </div>
    </main>
  );
}

export default About;
