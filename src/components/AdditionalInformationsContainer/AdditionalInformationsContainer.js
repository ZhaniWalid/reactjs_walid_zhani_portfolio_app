/* eslint-disable prettier/prettier */
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import './AdditionalInformationsContainer.css';

// CSS constant(s) to use them below for the styling ( style={{ X }} )
const alignPrgpheToLeft = { textAlign: 'left' };
const alignHalfTxtToRight = { float: 'right' };
const positionHalfTxtAbsolute = { position: 'absolute' };
const positionHalfTxtAbsoluteSpecSkype = { position: 'absolute', paddingLeft: '1.5px' };

const AdditionalInformationsContainer = ({ additionalInfo }) => (
  <div 
    className='additional-info'
    // marginLeft: was '-300px' and because I changed the Link Nav Titles to 'UPPERCASE'
    // In the file [./App.css] on '.link--nav => text-transform: 'uppercase'
    // So I changed it to '-250px' to be more fixed and not adjacent with left corner of the page
    style={{ marginTop: '700px', borderRadius: '100px', width: '105%' }}
  >
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
      <PhoneAndroidIcon titleAccess='Phone Number'/>
      <span style={positionHalfTxtAbsolute}>Phone</span>
      <span style={alignHalfTxtToRight}>
        {additionalInfo.voiceVideoContact.phoneNumber}
      </span>       
    </p>
    <p className='additional-info__description' style={alignPrgpheToLeft}>
      <WhatsAppIcon titleAccess='WhatsApp Number'/>
      <span style={positionHalfTxtAbsolute}>WhatsApp</span>
      <span style={alignHalfTxtToRight}>
        {additionalInfo.voiceVideoContact.phoneNumber}
      </span>     
    </p>
    <p className='additional-info__description' style={alignPrgpheToLeft}>
      {/* To change the color of the 'SVG Icon', go to the 'SVG Icon File' (in this case: [skype_icon.svg]), 
          in '<path />' tag, then change the value of 'fill' in the 'style' props, for my case
          from '#00AAF2' to '#bdbddd' (Desired Color) to be like other Icons from 'Material UI'
            ==> from style="fill:#00AAF2;" to style="fill:#bdbddd;" */}

          {/* I used the code of <svg /> & <path /> tag(s) directly here from the file ['skype_icon.svg'] 
              to be able to control the color ('fill' property) in the 'style' prop to make the color 
              of the 'Skype SVG Icon' to follow the 'currentColor' of the app between 
              'Dark mode'/'Light mode' =>  style={{ fill: 'currentColor' }}
                ==> I followed this link: https://css-tricks.com/creating-svg-icon-system-react/   */}
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 400.932 400.932'
            width='24px' 
            height='24px'
            aria-labelledby='title'              
          >           
          <path 
            style={{ fill: 'currentColor' }} 
            d='M384.762,231.039c-6.361-8.792-9.309-19.53-9.297-30.382c0.001-0.063,0.001-0.126,0.001-0.19
            c0-96.649-78.35-174.999-174.999-174.999c-21.143,0-41.402,3.763-60.162,10.64c-10.149,3.72-21.267,4.435-31.672,1.504
            c-9.191-2.589-19.009-3.681-29.18-2.981c-42.725,2.94-77.121,37.955-79.335,80.724c-1.057,20.414,5.065,39.351,16.053,54.539
            c6.361,8.792,9.309,19.53,9.296,30.382c0,0.063,0,0.126,0,0.19c0,96.649,78.349,174.999,174.999,174.999
            c21.144,0,41.403-3.763,60.162-10.64c10.149-3.72,21.267-4.435,31.672-1.504c9.191,2.589,19.008,3.681,29.18,2.981
            c42.725-2.94,77.12-37.954,79.335-80.722C401.872,265.166,395.75,246.228,384.762,231.039z M206.873,169.093
            c35.286,8.391,88.608,21.071,88.608,79.806c0,28.934-14.249,51.006-40.124,62.149c-18.464,7.952-39.361,9.025-57.368,9.025
            c-55.336,0-90.286-43.028-91.747-44.86c-9.062-11.366-7.197-27.928,4.17-36.99c11.364-9.066,27.926-7.196,36.99,4.167
            c0.081,0.097,20.982,24.101,50.587,25.04c35.65,1.131,43.795-9.476,44.848-18.53c1.287-11.058-8.55-19.176-48.146-28.592
            c-33.562-7.982-84.287-20.044-84.287-74.137c0-16.845,6.851-71.807,95.013-71.807c55.668,0,88.527,43.829,89.899,45.695
            c8.61,11.713,6.096,28.189-5.617,36.798c-11.662,8.572-28.034,6.119-36.677-5.452c-0.62-0.797-19.429-21.723-47.605-24.398
            c-21.32-2.025-42.37,5.663-42.37,17.02C163.047,156.06,169.092,160.108,206.873,169.093z'
          />
          <title>Skype ID</title>
          </svg>
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
      <span style={positionHalfTxtAbsolute}>Marital State</span>
      <span style={alignHalfTxtToRight}>
        {additionalInfo.state}
      </span>
    </p>
    <p className='additional-info__description' style={alignPrgpheToLeft}>
      <DriveEtaIcon titleAccess="Driver's License"/>
      <span style={positionHalfTxtAbsolute}>Driver&apos;s License</span>
      <span style={alignHalfTxtToRight}>
        {additionalInfo.driverLicense}
      </span>
    </p>
  </div>
);
  
export default AdditionalInformationsContainer;