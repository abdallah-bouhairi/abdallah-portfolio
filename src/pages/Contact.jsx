import { useState } from 'react';
export default function Contact() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); };
  return <section className="contact-page section-shell"><div className="contact-video-card"><div><span className="contact-highlight">Let's work together</span><h2>See My Projects At Once<br/>&amp; leave here your e-mail address</h2><p>ABDALLAH EL BOUHAIRI</p></div><form onSubmit={submit}><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required/><button type="submit">Submit</button>{sent && <small>Thank you! {email}</small>}</form></div><div className="contact-details"><a href="mailto:abdallah199912@gmail.com">abdallah199912@gmail.com</a><a href="https://github.com/abdallah-bouhairi" target="_blank" rel="noreferrer">github.com/abdallah-bouhairi</a></div></section>;
}
