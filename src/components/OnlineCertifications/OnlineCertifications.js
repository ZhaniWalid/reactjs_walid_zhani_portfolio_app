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
      maxWidth: '36ch'
      /* backgroundColor: theme.palette.background.paper */
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
        }  
    },
    listItemText: {
        // Same as this inline style: style={{ marginLeft: '10px' }}
        // but instead we call it ('listItemText') in the 'className' prop below
        marginLeft: '10px'
    },
    onlineCertifHeader: {
        width: '750px',
        fontSize: '1.085rem',
        color: 'var(--clr-fg-alt)'
    },
    onlineCertifBody: {
        width: '1000px',
        fontSize: '0.85rem',
        color: 'var(--clr-fg)'
    },
    spanIssuedOn: {
        // Same as this inline style: style={{ color: 'var(--clr-primary)' /* 'orange' */, fontSize: '0.8rem' }}
        // but instead we call it ('spanIssuedOn') in the 'className' prop below
        color: 'var(--clr-primary)',  // 'orange' 
        fontSize: '0.8rem'
    },
    listItemSecondaryAction: {
        // Same as this inline style: style={{ top: '15%', right: '-205%' }}
        // but instead we call it ('listItemSecondaryAction') in the 'className' prop below
        top: '15%', 
        right: '-205%'
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