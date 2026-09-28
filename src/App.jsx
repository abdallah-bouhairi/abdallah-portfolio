import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
export default function App() { return <div className="app-shell"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><footer><div className="footer-logo">ABDALLAH</div><div>© 2026 ABDALLAH EL BOUHAIRI · All Rights Reserved</div><div className="footer-social"><a href="https://github.com/abdallah-bouhairi" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:abdallah199912@gmail.com">Email</a></div></footer></div> }
