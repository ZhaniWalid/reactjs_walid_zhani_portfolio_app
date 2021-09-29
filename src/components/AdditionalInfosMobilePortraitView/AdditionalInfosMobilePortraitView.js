/* eslint-disable prettier/prettier */
import uniqid from 'uniqid';
import { additionalInformations } from '../../portfolio';
import AdditionalInfosMobilePortraitViewContainer from '../AdditionalInfosMobilePortraitViewContainer/AdditionalInfosMobilePortraitViewContainer';
// import '../Projects/Projects.css';
import './AdditionalInfosMobilePortraitView.css';

const AdditionalInfosMobilePortraitView = () => {
  if (!additionalInformations) return null;

  return (
    <section /* id='projects' */ className='section additional-infos-mobile-portrait'>
      {/* <h2 className='section__title'>Projects</h2> */}

      <div className='additional-infos-mobile-portrait__grid'>
        {/* {additionalInformations.map((project) => ( */}
          <AdditionalInfosMobilePortraitViewContainer key={uniqid()} additionalInfo={additionalInformations} />
        {/* ))} */}
      </div>
    </section>
  );
};

export default AdditionalInfosMobilePortraitView;