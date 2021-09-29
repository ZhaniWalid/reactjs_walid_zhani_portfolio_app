/* eslint-disable prettier/prettier */
import { about } from '../../portfolio';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    Copyrights © 2021&nbsp;
    <a
      href={about.social.linkedin}
      className='link footer__link'
      target='_blank'
      rel='noreferrer'
    >
      &nbsp;Walid Zhani
    </a>
  </footer>
);

export default Footer;
