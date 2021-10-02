/* eslint-disable prettier/prettier */
import uniqid from 'uniqid';
import AdditionalInformationsContainer from '../AdditionalInformationsContainer/AdditionalInformationsContainer';
import { additionalInformations } from '../../portfolio';
import './AdditionalInformations.css';

const AdditionalInformations = () => {
  if (!additionalInformations) return null;

  return (
    <section className='section additional-infos'>
      <div className='additional-infos__grid'>
          <AdditionalInformationsContainer key={uniqid()} additionalInfo={additionalInformations} />
      </div>
    </section>
  );
};

export default AdditionalInformations;