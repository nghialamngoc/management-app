import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
      },
    },
    '&::after': {
      content: "''",
      display: 'inline-block',
      width: '380px',
      height: '305px',
      background: '#1f2229',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '-1',
      margin: '-14px',
      borderRadius: '15px',
      clipPath: 'inset(2rem 0 1.75rem 2rem round 10px);',
      transition: 'clip-path 0.3s ease 0.1s',
      contain: 'strict'
    }
  },
  'single-pen__thumnail': {
    width: '100%',
    height: '75%',
    background: 'white',
    position: 'relative',
    overflow: 'hidden'
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
    margin: '15px 0 5px',
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
    textDecoration: 'none',
    color: 'white'
  },
  'single-pen__header-content-author': {
    margin: '0',
    fontSize: '13px',
    color: '#C0C3D0',
    textDecoration: 'none',
    "&:hover": {
      color: 'white'
    }
  },
  'single-pen__footer': {
  },
  'single-pen__footer-button': {
    display:'inline-block',
    padding: '5px 10px',
    background: '#030304',
    marginRight: '4px',
    marginTop: '3px',
    borderRadius: '4px',
    lineHeight: '0',
    color: 'white',
    opacity: '0',
    top: '-20px',
    '&[select="selected"], &:hover': {
      background: '#FFFFFF',
      '& $single-pen__footer-button-count': {
        color: 'black'
      },
      '& $single-pen__footer-button-icon[tag="love"]': {
        color: 'red',
      },
      '& $single-pen__footer-button-icon[tag="comment"]': {
        color: 'green',
      },
      '& $single-pen__footer-button-icon[tag="view"]': {
        color: '#2196F3',
      }
    },
    '&[select="selected"]': {
      border: '2px solid black',
      position: 'relative',
      zIndex: '2',
      '&:after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        width: 'calc( 100% + 6px )',
        height: 'calc( 100% + 6px )',
        top: '-3px',
        left: '-3px',
        border: '1px solid white',
        zIndex: '-1',
        borderRadius: '4px',
      }
    },
  },
  'single-pen__footer-button-icon': {
    color: 'white', fontSize: '17px', paddingRight: '4px'
  },
  'single-pen__footer-button-count': {
    color: 'white',
    fontSize: '11px',
    fontWeight: '600'
  },
  'in-active': {
    animation: '$myEffectIn 0.3s forwards ease',
  },
  'in-out': {
    animation: '$myEffectOut 0.3s forwards ease',
  },
  '@keyframes myEffectIn': {
    "0%": { opacity: 0, top: '-20px' },
    "100%": { opacity: 1, top: '0px' }
  },
  '@keyframes myEffectOut': {
    "0%": { opacity: 1, top: '0px' },
    "100%": { opacity: 0, top: '-20px' }
  }
});

export default function OneElement(props){
  const classes = useStyles();
  /*
  [Function] Handle display Footer animation
  --------------------------------------------------
  [Args] event: element
  [Return] None
  --------------------------------------------------
  */
  function displayFooter(event){
    const listButton = event.currentTarget.getElementsByClassName(classes['single-pen__footer-button']);
    for (let i = 0; i < listButton.length; i++) {
      const element = listButton[i];
      element.classList.add(classes['in-active']);
      element.style.animationDelay = `${ (listButton.length - i) * 0.1 }s`
    }
  }
  /*
  [Function] Handle close Footer animation
  --------------------------------------------------
  [Args] event: element
  [Return] None
  --------------------------------------------------
  */
  function hideFooter(event){
    const listButton = event.currentTarget.getElementsByClassName(classes['single-pen__footer-button']);
    for (let i = 0; i < listButton.length; i++) {
      const element = listButton[i];
      element.style.opacity = 1;
      element.style.top = '0';
      element.classList.remove(classes['in-active']);
      element.classList.add(classes['in-out']);
      element.style.animationDelay = `${ i * 0.1 }s`;
    }
    setTimeout(() => {
      for (let i = 0; i < listButton.length; i++) {
      const element = listButton[i];
      element.style.opacity = 0;
      element.style.top = '-20px';
      element.classList.remove(classes['in-out']);
    }
    }, listButton.length * 100);
  }
  return(
    <div className={classes["single-pen"]} onMouseEnter={displayFooter.bind(this)} onMouseLeave={hideFooter.bind(this)}>
      <div className={classes["single-pen__thumnail"]} 
        style={{
          'backgroundImage': `url("${'https://codepen.io/StackoverflowDev/pen/pojLKxO/image/small.png'}")`,
          'backgroundSize': 'cover' }}>
        <div className={classes["single-pen__thumnail-right"]}>
          <IconButton aria-label="Detail" size="small" className={classes["single-pen__thumnail-detail-button"]} onClick={() => props.openDialog('cssname')}>
            <ZoomOutMapIcon />
          </IconButton>
        </div>
        <a className={classes["single-pen__thumnail-link"]} href="https://codepen.io/StackoverflowDev/pen/pojLKxO" target="_blank" rel="noopener noreferrer" >
          <span style={{display: 'none'}}>Open in Editor</span>
        </a>
      </div>
      <div className={classes["single-pen__header"]}>
        <img className={classes["single-pen__header-avatar"]} src="https://s.cdpn.io/profiles/user/2369764/80.jpg?1573469689" alt="author-avatar"></img>
        <div className={classes["single-pen__header-content"]}>
          <a 
            className={classes["single-pen__header-content-title"]} 
            href="https://codepen.io/StackoverflowDev/pen/pojLKxO" 
            target="_blank" 
            rel="noopener noreferrer">
              IFrame Demo Test
          </a>
          <a className={classes["single-pen__header-content-author"]} href="https://codepen.io/StackoverflowDev/pen/pojLKxO">Nghia Lam</a>
        </div>
      </div>
      <div className={classes["single-pen__footer"]}>
        <IconButton className={`${classes["single-pen__footer-button"]}`} select="selected">
          <FavoriteIcon className={classes["single-pen__footer-button-icon"]} tag='love'></FavoriteIcon>
          <span className={classes["single-pen__footer-button-count"]}>15</span>
        </IconButton>
        <IconButton className={classes["single-pen__footer-button"]}>
          <ChatBubbleIcon className={classes["single-pen__footer-button-icon"]} tag='comment'></ChatBubbleIcon>
          <span className={classes["single-pen__footer-button-count"]}>0</span>
        </IconButton>
        <IconButton className={classes["single-pen__footer-button"]}>
          <VisibilityIcon className={classes["single-pen__footer-button-icon"]} tag='view'></VisibilityIcon>
          <span className={classes["single-pen__footer-button-count"]}>15</span>
        </IconButton>
      </div>
    </div>
  )
}