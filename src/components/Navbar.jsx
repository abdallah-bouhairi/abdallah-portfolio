import { Link, useLocation } from 'react-router-dom';

const socials = [
  ['in', 'https://www.linkedin.com/'],
  ['f', 'https://www.facebook.com/'],
  ['◎', 'https://www.instagram.com/'],
];

const BASE_URL = import.meta.env.BASE_URL;

export default function Navbar() {
  const location = useLocation();

  const goToSection = (section) => {
    // If we are already on Home, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // Update the URL hash
      window.history.replaceState(null, '', `${BASE_URL}#${section}`);
      return;
    }

    // If we are on another page, go back to Home
    window.location.href = `${BASE_URL}#${section}`;
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">

        {/* Logo */}
        <Link className="brand" to="/">
          ABDALLAH
        </Link>

        {/* Main Navigation */}
        <nav className="main-nav" aria-label="Primary navigation">

          <button
            type="button"
            onClick={() => goToSection('home')}
            className="nav-button"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goToSection('skills')}
            className="nav-button"
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => goToSection('projects')}
            className="nav-button"
          >
            Projects
          </button>

        </nav>

        {/* Social + Contact */}
        <div className="social-nav">

          {socials.map(([label, href]) => (
            <a
              key={label}
              className="social-circle"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          ))}

          <Link
            className="connect-outline"
            to="/contact"
          >
            Let's Connect
          </Link>

        </div>

      </div>
    </header>
  );
}

