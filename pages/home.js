export default function Home() {
  return /*html*/ `

  <section class="hero">
  <div class="hero-content">
    <div class="profile-image">
      <img src="./assets/img.png" alt="A placeholder for a portrait" />
    </div>

    <div class="hero-text">

      <h1>Celine Dahlen</h1>
       <span class="tag">Front-End Developer Student</span>

      <p>
      Hello! I am Celine, and I am a student at Noroff where I am currently studying front-end development.
      I hope to work as a front-end developer and improve my skills through personal projects
      and professional experience. 
      </p>

      <div class="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>UX Design</span>
      </div>

      <div class="buttons">
        <a href="#/projects" data-link class="btn-primary">View Projects</a>
        <a href="#/contact" data-link class="btn-secondary">Contact Me</a>
        <a href="./assets/CV + cover letter.pdf" target="_blank" class="btn-cv">CV/Cover letter</a>

      </div>
    </div>
  </div>
</section>

   `;
}