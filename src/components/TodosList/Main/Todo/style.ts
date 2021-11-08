import { makeStyles } from '@mui/styles';
// @ts-ignore
import closeImage from '../../../../image/close.png';
// @ts-ignore
import checkImage from '../../../../image/checked.png';
// @ts-ignore
import draggableImage from '../../../../image/draggabledots.jpg';

const useStyles = makeStyles({
  root: {
    width: `100%`,
    height: 50,
    display: `flex`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.4)`,
    justifyContent: `space-between`,
    alignItems: `center`,
    position: `relative`,
    '&:hover button': {
      opacity: 0.5,
    },
  },
  completeBtn: {
    marginLeft: `1%`,
    width: 20,
    height: 20,
    backgroundColor: `white`,
    borderRadius: `50%`,
    verticalAlign: `middle`,
    border: `1px solid rgba(0, 0, 0, 0.3)`,
    appearance: `none`,
    '-webkit-appearance': `none`,
    outline: `none`,
    '&:checked': {
      border: `1px solid rgba(0, 128, 0, 0.4)`,
      content: '',
      backgroundImage: `url(${checkImage})`,
      backgroundPosition: `center`,
      backgroundSize: 20,
      backgroundRepeat: `no-repeat`,
      opacity: 0.8,
    },
  },
  deleteBtn: {
    zIndex: 10,
    position: `absolute`,
    right: `5%`,
    width: 13,
    height: 13,
    background: `none`,
    backgroundImage: `url(${closeImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    border: `none`,
    opacity: 0,
    cursor: `pointer`,
    transition: `opacity 0.3s`,
    '&:hover': {
      opacity: 0.9,
    },
  },
  draggableIcon: {
    marginLeft: `1%`,
    width: 20,
    height: 20,
    background: `none`,
    backgroundImage: `url(${draggableImage})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    opacity: 0.4,
    border: `1px solid rgba(0, 0, 0, 0.4)`,
    borderRadius: '4px',
  },
});

export default useStyles;
