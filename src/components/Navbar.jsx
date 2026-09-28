import { NavLink, Link } from 'react-router-dom';

const socials = [
  ['in', 'https://www.linkedin.com/'],
  ['f', 'https://www.facebook.com/'],
  ['◎', 'https://www.instagram.com/'],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" to="/">ABDALLAH</Link>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="/#home">Home</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
        </nav>
        <div className="social-nav">
          {socials.map(([label, href]) => <a key={label} className="social-circle" href={href} target="_blank" rel="noreferrer">{label}</a>)}
          <Link className="connect-outline" to="/contact">Let's Connect</Link>
        </div>
      </div>
    </header>
  );
}
