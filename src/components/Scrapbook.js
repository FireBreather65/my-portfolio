import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Scrapbook() {
  return (
    <main>
      <div
        class="min-w-64 w-1/2 my-20 mx-auto text-center font-sans bg-orange-100 rounded-2xl shadow-lg p-4"
        style={{ fontFamily: "DM Sans" }}
      >
        <h1 class="text-3xl font-bold">Scrapbook</h1>
      </div>
    </main>
  );
}

export default Scrapbook;