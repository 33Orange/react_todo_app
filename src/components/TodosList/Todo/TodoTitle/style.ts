import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: `87%`,
    height: `100%`,
    position: `relative`,
  },
  text: {
    position: `absolute`,
    left: 0,
    top: 5,
    margin: 0,
    fontSize: 25,
    width: `100%`,
    height: `100%`,
    opacity: 0.9,
    '&.active': {
      opacity: 0.4,
      textDecoration: `line-through`,
    },
  },
  editInput: {
    fontSize: 25,
    fontWeight: 400,
    position: `absolute`,
    left: 0,
    top: 0,
    width: `100%`,
    height: `100%`,
    border: `none`,
    background: `#fff`,
    zIndex: 100,
    '&:focus': {
      outline: `1px solid rgba(0, 0, 0, 0.4);
      box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.2)`,
    },
  },
});

export default useStyles;
