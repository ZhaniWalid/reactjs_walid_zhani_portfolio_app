/* eslint-disable prettier/prettier */
import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';
import AdditionalInformations from '../AdditionalInformations/AdditionalInformations';
import myProfilePicture from '../../images/profile_pictures/My_foto_CV_2020.jpg';
import './Header.css';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <>
        <h3>
          {homepage ? (
            <a href={homepage} className='link' target='_blank' rel='noreferrer'>
              {/* {title} */}              
              <img src={myProfilePicture} 
                   alt='Walid Zhani' 
                   width='150' 
                   height='150'
                   style={{ marginTop: '100px', /* marginLeft: '-75px', */ borderRadius: '100px' }}
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