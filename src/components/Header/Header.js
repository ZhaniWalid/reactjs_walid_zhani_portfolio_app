/* eslint-disable prettier/prettier */
import Navbar from '../Navbar/Navbar';
import AdditionalInformations from '../AdditionalInformations/AdditionalInformations';
import myProfilePicture from '../../images/profile_pictures/My_foto_CV_2020.jpg';
import { header } from '../../portfolio';
import './Header.css';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <>
        <h3>
          {homepage ? (
            <a href={homepage} className='link' target='_blank' rel='noreferrer'>
              <img 
                src={myProfilePicture}
                className='profile-image' 
                alt='Walid Zhani' 
              />
            </a>
          ) : (
            title
          )}
        </h3>
        <AdditionalInformations />
      </>
      <Navbar />
    </header>
  );
};

export default Header;