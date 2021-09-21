/* eslint-disable prettier/prettier */
import uniqid from 'uniqid';
import { additionalInformations } from '../../portfolio';
// import '../Projects/Projects.css';
import AdditionalInformationsContainer from '../AdditionalInformationsContainer/AdditionalInformationsContainer';
import './AdditionalInformations.css';

const AdditionalInformations = () => {
  if (!additionalInformations) return null;

  return (
    <section /* id='projects' */ className='section projects'>
      {/* <h2 className='section__title'>Projects</h2> */}

      <div className='additional-infos__grid'>
        {/* {additionalInformations.map((project) => ( */}
          <AdditionalInformationsContainer key={uniqid()} additionalInfo={additionalInformations} />
        {/* ))} */}
      </div>
    </section>
  );
};

export default AdditionalInformations;