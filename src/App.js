import './App.css';

// TAILWIND (try import or install instead?, can use for dark mode!), design current page + create hover states, update .json files :) 

function App() {
  return (
    <div className="body">
      <img src="https://cloud-dr0rikspp-hack-club-bot.vercel.app/0untitled_design__1_.png" alt="Mountain at sunset in Olympia, Washington" />
      <h1>Malycia Ashley <span id="pronouns">(they/them)</span></h1>
      <p>UI Designer | Proficient in Figma | Teamwork | Accessibility</p>
      <div className="contact-nav">
        <a id="resume-button" href="https://docs.google.com/document/d/1XbUdY7ef-mh0TaYS7mJinEW-JWX-bpb2kg_1pnk-ObU/">Resume</a>
        <a className="contact-navbtn" href="https://www.linkedin.com/in/malycia-ashley/">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/2mdi_linkedin.svg" alt="LinkedIn icon" />
        </a>
        <a className="contact-navbtn" href="mailto:malyciaashley@gmail.com">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/0material-symbols_mail-rounded.svg" alt="Mail icon" />
        </a>
        <a className="contact-navbtn" href="https://github.com/FireBreather65">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/1mdi_github.svg" alt="GitHub icon" />
        </a>
      </div>
    </div>
  );
}

export default App;