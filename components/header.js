export default function Header() {
  return `
    <div class="container">
      <nav>
        <div class="logo">Celine Dahlen</div>

        <ul>
          <li><a href="#/" data-link>Home</a></li>
          <li><a href="#/about" data-link>About</a></li>
          <li><a href="#/projects" data-link>Projects</a></li>
          <li><a href="#/contact" data-link>Contact</a></li>
        </ul>
      </nav>
    </div>
  `;
}