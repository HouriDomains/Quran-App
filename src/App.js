import "./styles.css";
import Verse from "./quran.json";
import Contact from "./Contact";
import Search from "./Search";
import Quran from "./Quraan";
import Footer from "./Footer";

export default function App() {
  const randomIndex = Math.floor(Math.random() * Verse.length);
  const randomQuranData = Verse[randomIndex];

  return (
    <div className="App">
      <nav id="navbar" class="navbar">
        <a href="#"></a>
      </nav>

      <div class="container">
        <div class="menu">
          <a href="#random-verse" class="menu-icon fa-solid fa-house"></a>
          <a href="#search" class="menu-icon fa-solid fa-search"></a>
          <a href="#list" class="menu-icon fa-solid fa-book"></a>
          <a href="#appreciate" class="menu-icon fa-solid fa-thumbs-up"></a>
          <a href="#contact" class="menu-icon fa-solid fa-envelope"></a>
        </div>
        <div class="portfolio">
          <section class="header">
            <img
              class="header-img"
              src="https://scontent.fabv2-2.fna.fbcdn.net/v/t1.18169-9/13055363_1013952795341439_4284519396326794882_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=27UEbq8ZwW8AX-rlD0h&_nc_ht=scontent.fabv2-2.fna&oh=00_AfB4b8W-4YUJ63Hbz15Xl-RcGSM53wZSMVEdqmfqMsdP4w&oe=65616C27"
              alt=""
            />
            <h1>Sanni Aliyu</h1>
            <h2>Frontend Developer</h2>
            <div class="socials">
              <a
                href="https://linkedin.com/in/aliyusanni"
                target="_blank"
                rel="noreferrer"
                class="fa-brands fa-linkedin-in"
                id="profile-link"
              ></a>
              <a
                href="https://github.com/houridomains"
                target="_blank"
                rel="noreferrer"
                class="fa-brands fa-github"
              ></a>
              <a
                href="https://codesandbox.io/u/HouriDomain"
                target="_blank"
                rel="noopener"
                class="fa-brands fa-codepen"
              ></a>
            </div>
            <a href="" class="cta mn">
              Download CV
            </a>
          </section>

          <div class="content">
            <section class="content-card home" id="random-verse">
              <h1>Quote</h1> 
              <div className="box" key={randomQuranData.id}>
                <h2 style={{ textAlign: "center" }}>
                  {randomQuranData.ayah_ar}
                </h2>
                <p style={{ textAlign: "center" }}>
                  {randomQuranData.surah_name_ar} : {randomQuranData.ayah_no}
                </p>
                {/* <br/> */}
                <h2 style={{ textAlign: "justify" }}>
                  {randomQuranData.ayah_en}
                </h2>
                <p style={{ textAlign: "center" }}>
                  {randomQuranData.surah_name_transl} :{" "}
                  {randomQuranData.ayah_no}
                </p>
              </div>
            </section>

            <section class="content-card search" id="search">
              <Search />
            </section>

            <section class="content-card quran" id="list">
              <Quran />
            </section>

            <section class="content-card contact" id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
