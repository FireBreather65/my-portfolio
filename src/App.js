import './App.css';

// Today's todos: add all content (esp. section-nav!), set up Tailwind, update .json files :)

function App() {
  return (
    <div className="body">
      <div className="header">
        <img src="https://cloud-pxmactc09-hack-club-bot.vercel.app/0bi_moon.svg" alt="Dark mode icon" />
        <img src="https://cloud-pxmactc09-hack-club-bot.vercel.app/1bi_sun.svg" alt="Light mode icon" />
        <img src="https://cloud-dr0rikspp-hack-club-bot.vercel.app/0untitled_design__1_.png" alt="Mountain at sunset in Olympia, Washington" />
      </div>
      <img src="https://cloud-i5wn1rmma-hack-club-bot.vercel.app/0pxl_20240220_005648933.jpg" alt="Picture of me in front of trees" />
      <h1 className="name-pronouns">Malycia Ashley</h1>
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
      <div className="section-nav">
        <a className="section-navitm">
          <img src="" alt="" />
          <p></p>
        </a>
        <a className="section-navitm">
          <img src="" alt="" />
          <p></p>
        </a>
        <a className="section-navitm">
          <img src="" alt="" />
          <p></p>
        </a>
        <a className="section-navitm">
          <img src="" alt="" />
          <p></p>
        </a>
      </div>
    </div>
  );
}

export default App;