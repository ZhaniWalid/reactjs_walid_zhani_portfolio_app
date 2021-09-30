/* eslint-disable prettier/prettier */
import React from 'react';
import uniqid from 'uniqid';
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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { professionalExperiences } from '../../portfolio';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        width: '100%',
        maxWidth: '36ch',
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            maxWidth: 'fit-content'
        }
        /* backgroundColor: theme.palette.background.paper */
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    inline: {
        display: 'inline'
    },
    /* listItem: {
        boxShadow: theme.shadows[10],
        transition: 'transform 0.2s linear',
        '&:hover': {
            transform: 'translateY(-7px)'
        }
    }, */
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
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
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
        /* boxShadow: theme.shadows[10],
        transition: 'transform 0.2s linear',
        '&:hover': {
            transform: 'translateY(-7px)'
        } */
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
        '@media screen and (max-width: 1024px) and (orientation : portrait)': {
            marginLeft: '0px'
        },
        // To Configure the Components on 'Mobile Landscape View' with 'max-width: 1024px'
        '@media screen and (max-width: 1024px) and (orientation : landscape)': {
            marginLeft: '0px'
        }
    },
    proExpHeader: {
        width: '750px',
        fontSize: '1.085rem',
        fontWeight: '550',
        color: 'var(--clr-fg-alt)',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
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
    proExpBody: {
        width: '1000px',
        fontSize: '0.85rem',
        color: 'var(--clr-fg)',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
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
    descriptionPartOneAndTwo: {
        // Same as this inline style: style={{ color: 'var(--clr-primary)' /* 'orange' */, fontSize: '0.8rem' }}
        // but instead we call it ('descriptionPartOneAndTwo') in the 'className' prop below
        color: 'var(--clr-primary)',
        fontSize: '0.8rem',
        fontStyle: 'italic',
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
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
        // To Configure the Components on 'Mobile Portrait View' with 'max-width: 600px'
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

/** Concat list of 'Period' to 'Company Name' that are from the Array 'professionalExperiences' 
  * for every element
* */
const strConcatPeriodToCompanyName = (proExpPeriod, proExpCompanyName) => {
    // eslint-disable-next-line prefer-template
    const strFinal = proExpPeriod+ ' # '+ proExpCompanyName;
    return strFinal;
};

const ProfessionalExperiences = () => {
    const classes = useStyles();

    return (
        <section className='section professional experiences' id='professional_experiences'>
            <h2 className='section__title'>Professional Experiences</h2>
            <List className={classes.root}>
                {professionalExperiences.map((proExp) => (                        
                    <ListItem alignItems='flex-start' key={uniqid()}>
                        <ListItemAvatar>
                            <Avatar
                                className={classes.avatar}
                                variant='rounded'
                                alt='© Walid ZHANI'
                                src={proExp.companyLogo}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            primary={strConcatPeriodToCompanyName(proExp.period, proExp.companyName)}                       
                            classes={{ primary: classes.proExpHeader, secondary: classes.proExpBody }}
                            secondary={
                                <>
                                    <Typography
                                        component='span'
                                        variant='body2'
                                        className={classes.inline}
                                        // color='secondary'
                                    >
                                        {strConcatPeriodToCompanyName(
                                            proExp.role.mainRole, proExp.role.detailedRole
                                        )} 
                                        <br />                   
                                    </Typography>   
                                    <span className={classes.descriptionPartOneAndTwo}>
                                        {proExp.description.descriptionPartOne}
                                        <br />
                                        {proExp.description.descriptionPartTwo}
                                    </span>                                
                                </>
                            }
                        />
                        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
                            {/* ONLY AND ONLY IF 'proExp.linkToLinkedInCompany == true' then show <a href.. /> */}
                            {proExp.linkToLinkedInCompany && (
                                <a
                                    href={proExp.linkToLinkedInCompany}
                                    aria-label='linkedin'
                                    className='link link--icon'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                        </ListItemSecondaryAction>                  
                    </ListItem>                                 
                ))}               
            </List>
        </section>
    );
};

export default ProfessionalExperiences;