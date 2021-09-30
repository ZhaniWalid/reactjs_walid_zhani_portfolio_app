/* eslint-disable prettier/prettier */
import uniqid from 'uniqid';
import { languages } from '../../portfolio';
import './Languages.css';

const Languages = () => {
  if (!languages.length) return null;

  return (
    <section className='section languages' id='languages'>
      <h2 className='section__title'>Languages</h2>
      <ul className='languages__list'>
        {languages.map((lang) => (
          <li key={uniqid()} className='languages__list-item btn btn--plain'>
            {lang.langName} 
            &nbsp;({lang.langLvlRate}) 
            <img
              src={lang.langFlagIcon} 
              width='22.5px' 
              height='15px' 
              alt={lang.langFlagTxt} 
              title={lang.langFlagTxt} 
              style={{ float: 'right' }}
            />
            <br />
            <span className='languages__lang-lvl-desc'>{lang.langLvlDesc}</span>      
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;