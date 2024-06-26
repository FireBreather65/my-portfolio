import './App.css';

// icons for links, TAILWIND (try import or install instead?, can use for dark mode!), design current page!

function App() {
  return (
    <div className="App">
      <img src="https://cloud-dr0rikspp-hack-club-bot.vercel.app/0untitled_design__1_.png" alt="Mountain at sunset in Olympia, Washington" />
      <h1>Malycia Ashley <span>(they/them)</span></h1>
      <p>UI Designer | Proficient in Figma | Teamwork | Accessibility</p>
      <div className="contact-nav">
        <a id="resume-button" href="https://docs.google.com/document/d/1XbUdY7ef-mh0TaYS7mJinEW-JWX-bpb2kg_1pnk-ObU/">Resume</a>
        <a className="contact-navbtn" href="https://www.linkedin.com/in/malycia-ashley/"></a>
        <a className="contact-navbtn" href="mailto:malyciaashley@gmail.com"></a>
        <a className="contact-navbtn" href="https://github.com/FireBreather65"></a>
      </div>
    </div>
  );
}

export default App;