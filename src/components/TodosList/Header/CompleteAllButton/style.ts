import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    left: 0,
    width: `10%`,
    border: `none`,
    position: `absolute`,
    opacity: 0,
    zIndex: -1,
    '&:checked + label': {
      opacity: 0.65,
    },
  },
  label: {
    fontSize: 25,
    width: `6%`,
    marginLeft: `7%`,
    marginRight: `5%`,
    display: `inline-flex`,
    alignItems: `center`,
    userSelect: `none`,
    transform: `rotate(90deg)`,
    opacity: 0.2,
    transition: '0.3s',
    '&:hover': {
      opacity: 0.4,
    },
  },
});

export default useStyles;
