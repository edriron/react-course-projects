import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="footer-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        - Backroads travel tours
        <span id="date">{new Date().getFullYear()}</span>-
      </p>
    </footer>
  );
};

export default Footer;
