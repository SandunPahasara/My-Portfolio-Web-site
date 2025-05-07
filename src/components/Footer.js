import { useState } from 'react';
import './Footer.css';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const [activePopup, setActivePopup] = useState(null);

  const policies = {
    privacy: `
      We respect your privacy. Any personal information collected will only be used to 
      improve your experience. We don't share your data with third parties without consent.
      For more details, see our full Privacy Policy.
    `,
    terms: `
      By using this site, you agree to our terms. Content is provided "as is" without 
      warranties. You're responsible for how you use the information presented here.
      See our full Terms of Service for complete details.
    `
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com/sandunpahasara.weerasinghe?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" title="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/sandun-pahasara-weerasinghe-b03462306/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" title="LinkedIn" />
          </a>
          <a href="https://github.com/SandunPahasara" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" title="GitHub" />
          </a>
          <a href="https://www.instagram.com/sp_pikka?igsh=ZjU2MTUzcTgzNnFo&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" title="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@sp_pikka?_t=ZS-8vkC83L2uHf&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon" title="TikTok" />
          </a>
          <a href="https://youtube.com/@sandunpahasara?si=OKpWn-Qd7IdBtoyj" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" title="YouTube" />
          </a>
      
        </div>

        <div className="footer-links">
          <div 
            className="policy-link"
            onMouseEnter={() => setActivePopup('privacy')}
            onMouseLeave={() => setActivePopup(null)}
          >
            <a href="/privacy">Privacy Policy</a>
            {activePopup === 'privacy' && (
              <div className="policy-popup">
                <p>{policies.privacy}</p>
              </div>
            )}
          </div>

          <div 
            className="policy-link"
            onMouseEnter={() => setActivePopup('terms')}
            onMouseLeave={() => setActivePopup(null)}
          >
            <a href="/terms">Terms of Service</a>
            {activePopup === 'terms' && (
              <div className="policy-popup">
                <p>{policies.terms}</p>
              </div>
            )}
          </div>
        </div>

        <p className="copyright">&copy; {new Date().getFullYear()} My Profile. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;