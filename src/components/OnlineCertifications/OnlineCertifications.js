/* eslint-disable prettier/prettier */
import React from 'react';
import uniqid from 'uniqid';
import LaunchIcon from '@material-ui/icons/Launch';
import { 
    List, 
    createStyles, 
    makeStyles, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Avatar, 
    Typography,
    ListItemSecondaryAction
} from '@material-ui/core';
import { onlineCertifications } from '../../portfolio';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
      '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            maxWidth: 'fit-content'  
      },
      // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
      '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            maxWidth: 'fit-content'
       },
       // Exceptions For Large Mobile Screens using '768px & 1024' Portrait Mode
       // To Configure the Components on 'Mobile Portrait View' with min-width: 768px & 'max-width: 1024px'
       '@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation : portrait)': {
            maxWidth: 'fit-content'
        }
        // backgroundColor: theme.palette.background.paper 
    },
    inline: {
      display: 'inline'
    },
    avatar: {
        // Same as this inline style: style={{ height: '100px', width: '100px', boxShadow: 'var(--shadow)'... }}
        // but instead we call it ('avatar') in the 'className' prop below
        boxShadow: theme.shadows[10],
        transition: 'transform 0.2s linear',
        borderRadius: '15px',
        height: '100px',
        width: '100px',
        '&:hover': { // = 'avatar:hover'
            transform: 'translateY(-7px)'
        },
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            height: '50px',
            width: '50px'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            height: '50px',
            width: '50px'
        }
    },
    listItemText: {
        // Same as this inline style: style={{ marginLeft: '10px' }}
        // but instead we call it ('listItemText') in the 'className' prop below
        marginLeft: '10px',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            marginLeft: '0px'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            marginLeft: '0px'
        }
    },
    onlineCertifHeader: {
        width: '750px',
        fontSize: '1.085rem',
        fontWeight: '550',
        color: 'var(--clr-fg-alt)',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            width: 'auto', // '335px'
            fontSize: '0.925rem'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            width: 'auto', // '335px'
            fontSize: '0.925rem'
        }
    },
    onlineCertifBody: {
        width: '1000px',
        fontSize: '0.85rem',
        color: 'var(--clr-fg)',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            width: 'auto',
            fontSize: '0.750rem'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            width: 'auto',
            fontSize: '0.750rem'
        }
    },
    spanIssuedOn: {
        // Same as this inline style: style={{ color: 'var(--clr-primary)' /* 'orange' */, fontSize: '0.8rem' }}
        // but instead we call it ('spanIssuedOn') in the 'className' prop below
        color: 'var(--clr-primary)',  // 'orange' 
        fontSize: '0.8rem',
        fontStyle: 'italic',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            fontSize: '0.7rem'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            fontSize: '0.7rem'
        }
    },
    listItemSecondaryAction: {
        // Same as this inline style: style={{ top: '15%', right: '-205%' }}
        // but instead we call it ('listItemSecondaryAction') in the 'className' prop below
        top: '15%', 
        right: '-205%',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            right: '0%', // '2.5%',
            top: '30px'
            // marginRight: '-0.2em'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            right: '0%', // '2.5%',
            top: '30px'
            // marginRight: '-0.2em'
        }
    }
  })
);

const OnlineCertifications = () => {
    const classes = useStyles();

    return (
        <section className='section online certifications' id='online_certifications'>
            <h2 className='section__title'>Online Certifications</h2>
            <List className={classes.root}>
                {onlineCertifications.map((onlineCertif) => (                            
                    <ListItem alignItems='flex-start' key={uniqid()}>
                        <ListItemAvatar>
                            <Avatar
                                className={classes.avatar}
                                variant='rounded'
                                alt='© Walid ZHANI'
                                src={onlineCertif.logoCourseProvider}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            primary={onlineCertif.nameCertif}
                            classes={{ primary: classes.onlineCertifHeader, secondary: classes.onlineCertifBody }}
                            secondary={
                                <>
                                    <Typography
                                        component='span'
                                        variant='body2'
                                        className={classes.inline}
                                        // color='secondary'
                                    >
                                        {/* Issued By */} <span /* style={{ paddingLeft: '45px' }} */>{onlineCertif.issuedBy}</span>
                                        <br />                   
                                    </Typography>   
                                    <span className={classes.spanIssuedOn}>
                                        {/* Issued On */} <span /* style={{ paddingLeft: '43px' }} */>{onlineCertif.issuedOn}</span>
                                    </span>                                
                                </>
                            }
                        />
                        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
                            {/* ONLY AND ONLY IF 'onlineCertif.linkToCertif == true' then show <a href.. /> */}
                            {onlineCertif.linkToCertif && (
                                <a
                                    href={onlineCertif.linkToCertif}
                                    aria-label='live preview'
                                    className='link link--icon'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <LaunchIcon />
                                </a>
                            )}
                        </ListItemSecondaryAction>
                    </ListItem>                        
                ))}
            </List>
        </section>
    ); 
};

export default OnlineCertifications;