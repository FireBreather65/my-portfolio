import './App.css';

// implement Tailwind! (responsivity is so much easier with sm, md, lg, etc.: https://tailwindcss.com/docs/responsive-design; however, do not use sm to target mobile!)
// research how to scale images :)

function App() {
  return (
    <div class="min-w-64 w-1/2 my-20 mx-auto text-center">
      <header>
        {/*<img src="https://cloud-pxmactc09-hack-club-bot.vercel.app/0bi_moon.svg" alt="Dark mode icon" class="w-8 h-8 border-2 border-blue-400 border-solid rounded ml-8 inline-block align-middle" />
        <img src="https://cloud-pxmactc09-hack-club-bot.vercel.app/1bi_sun.svg" alt="Light mode icon" class="w-8 h-8 border-2 border-blue-400 border-solid rounded ml-8 inline-block align-middle" />*/}
        {/* ^^ future implementation ^^ */}
        <img src="https://cloud-dr0rikspp-hack-club-bot.vercel.app/0untitled_design__1_.png" alt="Mountain at sunset in Olympia, Washington" class="w-full" /> {/* <- good for now, figure out how to scale! */}
      </header>
      <img src="https://cloud-i5wn1rmma-hack-club-bot.vercel.app/0pxl_20240220_005648933.jpg" alt="Picture of me in front of trees" class="w-36 h-36 -mt-16 rounded-full border-4 border-white border-solid" /> {/* <- fix border, automatically resize to be half of pic, if possible; debate centering? */}
      <h1 class="text-4xl font-bold">Malycia Ashley <span class="text-xl opacity-40 inline align-middle">(they/them)</span></h1>
      <p>UI Designer | Proficient in Figma | Teamwork | Accessibility</p>
      <div className="contact-nav">
        <a href="https://docs.google.com/document/d/1XbUdY7ef-mh0TaYS7mJinEW-JWX-bpb2kg_1pnk-ObU/" class="bg-blue-400 rounded no-underline font-bold text-white inline-block align-middle p-2">Resume</a>
        <a className="contact-navitm" href="https://www.linkedin.com/in/malycia-ashley/" target="_blank">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/2mdi_linkedin.svg" alt="LinkedIn icon" class="w-8 h-8 border-2 border-blue-400 border-solid rounded ml-8 inline-block align-middle"  />
        </a>
        <a className="contact-navitm" href="mailto:malyciaashley@gmail.com" target="_blank">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/0material-symbols_mail-rounded.svg" alt="Mail icon" class="w-8 h-8 border-2 border-blue-400 border-solid rounded ml-8 inline-block align-middle" />
        </a>
        <a className="contact-navitm" href="https://github.com/FireBreather65" target="_blank">
          <img src="https://cloud-o9etpd58m-hack-club-bot.vercel.app/1mdi_github.svg" alt="GitHub icon" class="w-8 h-8 border-2 border-blue-400 border-solid rounded ml-8 inline-block align-middle" />
        </a>
      </div>
      {/* fix orientation, currently up to down */}
    <div className="section-nav">
        <a href="#">
          <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/0priscilla-du-preez-k8xygbw4ahg-unsplash__1_.jpg" alt="Two people holding coffee" class="w-16 h-16 rounded-full inline-block text-center m-auto" />
          <p>About</p>
        </a>
        <a href="#">
          <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/1ian-dooley-dj7bwa-gwks-unsplash__1_.jpg" alt="Tech setup with laptop and coffee" class="w-16 h-16 rounded-full inline-block text-center m-auto" />
          <p>Experience</p>
        </a>
        <a href="#">
          <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/3goran-ivos-ioykdikzlqw-unsplash__1_.jpg" alt="Laptop on an ottoman" class="w-16 h-16 rounded-full inline-block text-center m-auto" />
          <p>Projects</p>
        </a>
        <a href="#">
          <img src="https://cloud-i3mm96q23-hack-club-bot.vercel.app/2rirri-p_swqcxuc1k-unsplash__1_.jpg" alt="Polaroids in a scrapbook" class="w-16 h-16 rounded-full inline-block text-center m-auto" />
          <p>Scrapbook</p>
        </a>
    </div>
      <footer>
        <p>Made with ❤️ by Malycia Ashley</p>
      </footer>
   </div>
  );
}

export default App;