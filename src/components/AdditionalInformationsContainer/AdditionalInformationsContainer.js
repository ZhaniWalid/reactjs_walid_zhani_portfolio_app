/* eslint-disable prettier/prettier */
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SkypeIcon from '../../images/svg_icons/skype_icon.svg';
import './AdditionalInformationsContainer.css';


// CSS constant(s) to use them below for the styling ( style={{ X }} )
const alignPrgpheToLeft = { textAlign: 'left' };
const alignHalfTxtToRight = { float: 'right' };
const positionHalfTxtAbsolute = { position: 'absolute' };
const positionHalfTxtAbsoluteSpecSkype = { position: 'absolute', paddingLeft: '1.5px' };

const AdditionalInformationsContainer = ({ additionalInfo }) => (
    <div className='additional-info' style={{ marginTop: '750px', marginLeft: '-300px', borderRadius: '100px', width: '105%' }}>
      <h3>{additionalInfo.fullName}</h3>
      <h6>({additionalInfo.email})</h6>
      
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <LocationOnIcon titleAccess='Country Location'/> 
        <span style={positionHalfTxtAbsolute}>Country</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.country}
        </span>
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <PhoneAndroidIcon titleAccess='Phone N°'/>
        <span style={positionHalfTxtAbsolute}>Phone</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.voiceVideoContact.phoneNumber}
        </span>       
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <WhatsAppIcon titleAccess='WhatsApp N°'/>
        <span style={positionHalfTxtAbsolute}>WhatsApp</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.voiceVideoContact.phoneNumber}
        </span>     
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
       {/* To change the color of the 'SVG Icon', go to the 'SVG Icon File' (in this case: [skype_icon.svg]), 
           in '<path />' tag, then change the value of 'fill' in the 'style' props, for my case
 	 	       from '#00AAF2' to '#bdbddd' (desired color) to be like other Icons from 'Material UI'
		       ==> from style="fill:#00AAF2;" to style="fill:#bdbddd;" */}
        <img src={SkypeIcon} width='24px' height='24px' alt='Skype ID' title='Skype ID'/>
        <span style={positionHalfTxtAbsoluteSpecSkype}>Skype</span>            
        <span style={alignHalfTxtToRight}>
          {additionalInfo.voiceVideoContact.skypeId}
        </span> 
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <DateRangeIcon titleAccess='Date Of Birth'/>
        <span style={positionHalfTxtAbsolute}>D.O.B</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.dateOfBirth}
        </span>
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <FavoriteIcon titleAccess='Marital State'/>
        <span style={positionHalfTxtAbsolute}>State</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.state}
        </span>
      </p>
      <p className='additional-info__description' style={alignPrgpheToLeft}>
        <DriveEtaIcon titleAccess="Driver's License"/>
        <span style={positionHalfTxtAbsolute}>License</span>
        <span style={alignHalfTxtToRight}>
          {additionalInfo.driverLicense}
        </span>
      </p>
      {/* {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )} */}
  
      {/* {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
      )}
  
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <LaunchIcon />
        </a>
      )} */}
    </div>
  );
  
  export default AdditionalInformationsContainer;