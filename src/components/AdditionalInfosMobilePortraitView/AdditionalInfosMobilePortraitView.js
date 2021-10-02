/* eslint-disable prettier/prettier */
import uniqid from 'uniqid';
import AdditionalInfosMobilePortraitViewContainer from '../AdditionalInfosMobilePortraitViewContainer/AdditionalInfosMobilePortraitViewContainer';
import { additionalInformations } from '../../portfolio';
import './AdditionalInfosMobilePortraitView.css';

const AdditionalInfosMobilePortraitView = () => {
  if (!additionalInformations) return null;

  return (
    <section className='section additional-infos-mobile-portrait'>
      <div className='additional-infos-mobile-portrait__grid'>
          <AdditionalInfosMobilePortraitViewContainer key={uniqid()} additionalInfo={additionalInformations} />
      </div>
    </section>
  );
};

export default AdditionalInfosMobilePortraitView;