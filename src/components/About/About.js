/* eslint-disable prettier/prettier */
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import TunisiaFlag from '../../images/svg_icons/tunisia_flag_icon.svg';
import AdditionalInfosMobilePortraitView from '../AdditionalInfosMobilePortraitView/AdditionalInfosMobilePortraitView';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>
        {description.descriptionPartOne}
        <img src={TunisiaFlag} width='22.5px' height='15px' alt='Tunisia Flag' title='Tunisia Flag'/>
        {description.descriptionPartTwo}
      </p>
      <AdditionalInfosMobilePortraitView />  
      <div className='about__contact center'>
        {resume && (      
          <a href={resume} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline' style={{ textTransform: 'uppercase' }}>
              My Resume - CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <TwitterIcon />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                aria-label='facebook'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <FacebookIcon />
              </a>
            )}
          </>  
        )}
      </div>
    </div>
  );
};

export default About;