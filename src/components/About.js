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
        I am a detail-oriented and analytical professional who excels in identifying and rectifying UX mistakes, conducting thorough competitive audits, and implementing effective solutions with my team. My self-motivation and hard work have been shown by homeschooling myself to graduate high school at 16, developing my personal website after learning React basics over the course of a week, and creating a tailored roadmap to learn UX and secure a job within 6 months.
        <br />
        <br />
        Some core values that drive my work are loyalty, compassion, and strong belief in diversity. My unwavering commitment to deadlines, meetings, and clients highlights my reliability, while my history of tutoring underserved children and hosting gender-focused hackathons reflect my empathetic approach to user research and commitment to equitable participation.
        </p>
      </div>
    </main>
  );
}

export default About;
