import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  'single-pen': {
    height: '250px',
    width: '350px',
    position: 'relative',
    zIndex: '1',
    '&:hover': {
      '&::after': {
        clipPath: 'inset(0 0 0 0 round 10px);',
      },
      '& $single-pen__thumnail-right::after': {
        opacity: '0.8'
      },
      '& $single-pen__thumnail-detail-button': {
        opacity: '1'
      }
    },
    '&::after': {
      content: "''",
      display: 'inline-block',
      width: '380px',
      height: '300px',
      background: '#1f2229',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '-1',
      margin: '-14px',
      borderRadius: '15px',
      clipPath: 'inset(2rem 0 1.5rem 2rem round 10px);',
      transition: 'clip-path 0.3s ease 0.1s',
      contain: 'strict'
    }
  },
  'single-pen__thumnail': {
    width: '100%',
    height: '75%',
    background: 'white',
    position: "relative",
  },
  'single-pen__thumnail-right': {
    width: '110px',
    height: '100%',
    position: 'absolute',
    top: '0',
    right: '0',
    '&:after': {
      content: '""',
      width: '110px',
      display: 'inline-block',
      height: '170px',
      background: 'linear-gradient(to bottom left,rgba(0,0,0,.8),rgba(0,0,0,.2),transparent 49%)',
      transition: '0.3s ease 0.1s',
      opacity: '0'
    },
    '&:hover': {
      '&::after': {
        height: '100%',
      },
      '& $single-pen__thumnail-detail-button': {
         background: '#5a5f73',
         color: 'white',
         transform: 'scale(1.1)'
      }
    }
    
  },
  'single-pen__thumnail-link': {
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  'single-pen__thumnail-detail-button':{
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#c7cad4',
    background: '#5a5f73',
    borderRadius: '5px',
    padding: '4px',
    zIndex: '2',
    transition: '0.3s ease 0.1s',
    opacity: '0',
  },
  'single-pen__header': {
    margin: '15px 0',
    width: '90%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  'single-pen__header-avatar': {
    width: '45px',
    height: '45px',
    background: 'white',
    marginRight: '10px'
  },
  'single-pen__header-content': {
    display: 'flex',
    color: 'white',
    flexDirection: 'column'
  },
  'single-pen__header-content-title': {
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  'single-pen__header-content-author': {
    margin: '0',
    fontSize: '13px',
    color: '#C0C3D0',
    cursor: 'pointer',
    "&:hover": {
      color: 'white'
    }
  },
  'single-pen__footer': {
    
  },
});

export default function OneElement(){
  const classes = useStyles();
  return(
    <div className={classes["single-pen"]}>
      <div className={classes["single-pen__thumnail"]}>
        <div className={classes["single-pen__thumnail-right"]}>
          <IconButton aria-label="Detail" size="small" className={classes["single-pen__thumnail-detail-button"]}>
            <ZoomOutMapIcon />
          </IconButton>
        </div>
        <a className={classes["single-pen__thumnail-link"]} href="https://codepen.io/sashatran/pen/LYVzZWj">
          <span style={{display: 'none'}}>Open in Editor</span>
        </a>
      </div>
      <div className={classes["single-pen__header"]}>
        <img className={classes["single-pen__header-avatar"]} src="https://s.cdpn.io/profiles/user/2369764/80.jpg?1573469689"></img>
        <div className={classes["single-pen__header-content"]}>
          <p className={classes["single-pen__header-content-title"]}>Control a Rocket Ship with Vue</p>
          <p className={classes["single-pen__header-content-author"]}>Jack Domleo</p>
        </div>
      </div>
      <div className="single-pen__footer"></div>
    </div>
  )
}