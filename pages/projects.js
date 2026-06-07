export default function Projects() {
  return `
    <section class="portfolio">
  <div class="container">
    <div class="section-header">
      <h1>Projects</h1>
      <p>
        A selection of projects I have been working on which showcase
        my skills in front-end development with HTML, CSS, and Javascript.
      </p>
    </div>

    <div class="projects-grid">

      <article class="project-card">
        <img
          src="./assets/rain.png"
          alt="Rainy Days homepage thumbnail"
          class="project-image"
        />

        <div class="project-content">
          <h2>Rainy Days</h2>

          <p>
            An interactive and responsive e-commerce store selling rain jackets, made with 
            HTML, CSS, and Javascript.
          </p>

          <div class="project-links">
            <a
              href="https://github.com/celds/html-css-celinedahlen"
              target="_blank"
              class="github-btn"
            >GitHub</a>

            <a
              href="https://celds.github.io/html-css-celinedahlen/"
              target="_blank"
              class="demo-btn"
            >Live Project</a>
          </div>
        </div>
      </article>


      <article class="project-card">
        <img
          src="./assets/java1.jpg"
          alt="JavaScript code thumbnail"
          class="project-image"
        />

        <div class="project-content">
          <h2>JavaScript 1</h2>

          <p>
            JavaScript web application featuring API data, 
            dynamic content, and interactive user functionality for Rainy Days.
          </p>

          <div class="project-links">
            <a
              href="https://github.com/celds/html-css-celinedahlen"
              target="_blank"
              class="github-btn"
            >GitHub</a>

            <a
              href="https://celds.github.io/html-css-celinedahlen/"
              target="_blank"
              class="demo-btn"
            >Live Project</a>
          </div>
        </div>
      </article>

  
      <article class="project-card">
        <img
          src="./assets/museum1.png"
          alt="Semester Project home page thumbnail"
          class="project-image"
        />

        <div class="project-content">
          <h2>Semester Project</h2>

          <p>
            A website for a science museum for kids and families, made with HTML and CSS, featuring a 
            responsive design.
          </p>

          <div class="project-links">
            <a
              href="https://github.com/celds/Semester-project-celineD"
              target="_blank"
              class="github-btn"
            >GitHub</a>

            <a
              href="https://celds.github.io/Semester-project-celineD/"
              target="_blank"
              class="demo-btn"
            >Live Project</a>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
  `;
}