/* eslint-disable prettier/prettier */
// import EmailIcon from '@material-ui/icons/Email';
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline' style={{ textTransform: 'uppercase' }}>
          Send me e-mail
        </span>      
      </a>
      {/* <EmailIcon /> */}
    </section>
  );
};

export default Contact;
