import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstaIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
      <p>App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b></p>
      <div className="footer-icons">
        <a href='https://www.youtube.com/DevSuperior' target='_new'>
          <YoutubeIcon />
        </a>
        <a href='https://www.linkedin.com/in/marcosveloso99/' target='_new'>
          <LinkedinIcon />
        </a>
        <a href='https://www.instagram.com/marcos_veloso21/' target='_new'>
          <InstaIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;