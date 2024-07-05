import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Experience() {
  return (
    <main>
      <div
        class="min-w-80 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg p-8 w-1/2"
        style={{ fontFamily: "DM Sans" }}
      >
        <h1 class="text-3xl font-bold">Experience</h1>

        {/* FIRST JOB */}
        <div class="text-left sm:w-3/4 lg:w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Web Developer</h2>
          <h3 class="text-lg font-semibold">Sweet Comforts Bakery</h3>
          <p>
            Created an online presence for a local small business to help build
            a customer base!
            <br />
            <br />
            &#x1F91D;&#127998; Held weekly meetings with the owner to establish
            vision
            <br />
            &#x2728; Created UI kit and user flows for each stage
            <br />
            &#x1F60A; Designed logo and site in Figma
            <br />
            &#x1F4BB; Developed final site in Wix
            <br />
            <br />
          </p>
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Figma (software)
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Communication
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Wireframing
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              User Interface Design
            </p>
          </div>
        </div>

        {/* SECOND JOB*/}
        <div class="text-left sm:w-3/4 lg:w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Days of Service Organizer</h2>
          <h3 class="text-lg font-semibold">Hack Club</h3>
          <p>
            Worked with fellow Hack Club members to plan events to support
            girls, women, and gender-diverse people in tech across the US and
            Canada!
            <br />
            <br />
            &#x1F332; Initiated and led Evergreen, the Seattle-based branch
            organized in partnership with the Renton School District, with
            workshops on various tech topics
            <br />
            &#x2600; Organized and hosted a networking dinner for Oasis, the
            Austin-based branch, with around 35 professional women in tech and
            high school mentees
            <br />
            &#x1F4BB; Helped organize and host Think Like a Programmer, the
            Boston-based branch, with over 25 local Girl Scouts in attendance
            <br />
            <br />
          </p>
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Figma (software)
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Communication
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Teamwork
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Project Management
            </p>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Event Planning
            </p>
          </div>
        </div>

        {/* THIRD JOB*/}
        <div class="text-left sm:w-3/4 lg:w-1/2 mx-auto p-8 m-8 rounded-2xl bg-orange-50">
          <h2 class="text-xl font-extrabold">Summer Intern</h2>
          <h3 class="text-lg font-semibold">Hack Club</h3>
          <p>
            Worked on various projects for the org, including contacting and
            meeting with local government officials and other influential
            people.
            <br />
            <br />
          </p>
          {/* SKILLS */}
          <div>
            <p class="rounded border border-purple-400 border-solid p-1 bg-pink-200 inline-block flex-wrap mr-2 mb-2">
              Communication
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;