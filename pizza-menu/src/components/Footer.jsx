import React from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <div>
          <div className="footer-text">
            <p>Follow us on social media for updates and promotions!</p>
            <p>
              Contact us at: <span>+(43)039-42-67</span>
            </p>
            <p>
              Address: <span> 123 Pizza Street, Foodville, USA </span>
            </p>
          </div>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/">
                Instagram
                <img
                  src="icons/1_Instagram_colored_svg_1-512.webp"
                  alt="instagram_icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.telegram.com/">
                Telegram
                <img src="icons/telegram.png" alt="telegram_icon" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                YouTube
                <img src="icons/youtube.png" alt="youtube_icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
