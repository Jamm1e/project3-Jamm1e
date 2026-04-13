import '../css/Contact.css';

const contactLinks = [
  {
    platform: 'Email',
    handle: 'jammieannm2@gmail.com',
    href: 'mailto:jammieannm2@gmail.com',
    icon: '✉',
    description: "Best way to reach me — I'll respond within 24 hours.",
  },
  {
    platform: 'LinkedIn',
    handle: 'jammie-ann-matthias',
    href: 'https://www.linkedin.com/in/jammie-ann-matthias/',
    icon: '◈',
    description: 'Connect professionally and see my experience.',
  },
  {
    platform: 'GitHub',
    handle: 'Jamm1e',
    href: 'https://github.com/Jamm1e',
    icon: '⬡',
    description: 'Browse my repositories and open-source contributions.',
  },
];

// Reusable ContactCard component
function ContactCard({ platform, handle, href, icon, description }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card contact-card">
      <div className="contact-icon">{icon}</div>
      <div className="contact-info">
        <p className="contact-platform">{platform}</p>
        <p className="contact-handle">{handle}</p>
        <p className="contact-desc">{description}</p>
      </div>
      <span className="contact-arrow">→</span>
    </a>
  );
}

export default function Contact() {
  return (
    <div className="page">
      <p className="section-label fade-up">Let's Connect</p>
      <h2 className="section-title fade-up delay-1">Contact</h2>
      <div className="section-divider fade-up delay-1" />

      <p className="contact-intro fade-up delay-2">
        I'm always open to new opportunities, collaborations, or just a conversation about tech.
        Feel free to reach out through any of the channels below.
      </p>

      <div className="contact-list fade-up delay-3">
        {contactLinks.map((c) => (
          <ContactCard key={c.platform} {...c} />
        ))}
      </div>
    </div>
  );
}
